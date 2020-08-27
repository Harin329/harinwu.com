import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CurvedArrow from "react-curved-arrow";
import { db, firestore, auth } from "./services/firebase";
import { v4 as uuidv4 } from "uuid";

class GoalTree {
  constructor(id, value, complete) {
    this.value = value;
    this.descendents = [];
    this.parent = null;
    this.id = id;
    this.done = complete;
  }

  flip() {
    this.done = !this.done;
  }

  get treeID() {
    return this.id;
  }

  set treeID(newID) {
    this.id = newID;
  }

  get children() {
    return this.descendents;
  }

  set children(node) {
    this.descendents.push(node);
    if (node) {
      node.parent = this;
    }
  }

  get hasChild() {
    return this.descendents.length !== 0;
  }

  set goal(g) {
    this.value = g;
  }

  get goal() {
    return this.value;
  }

  removeChild(node) {
    var newChildren = [];
    for (const child of this.descendents) {
      if (child !== node) {
        newChildren.push(child);
      }
    }
    this.descendents = newChildren;
  }
}

function App() {
  const [selection, setSelection] = useState([]);
  const [drilldown, setDrilldown] = useState([]);
  const [modalOpen, setModal] = useState(false);
  const [password, setPassword] = useState();
  const [update, setUpdate] = useState(true);
  const [showAll, setAll] = useState(false);

  const timeline = [
    "Life",
    "10 Year",
    "Annual",
    "Quarter",
    "Monthly",
    "Weekly",
  ];

  async function login(password) {
    try {
      await auth
        .signInWithEmailAndPassword("master.harin@gmail.com", password)
        .then(() => {
          console.log("User logged in!");
          setModal(false);
        })
        .catch(() => {
          console.log("Incorrect");
          setModal(false);
        });
    } catch (e) {
      console.error(e.message);
      setModal(false);
    }
  }

  function parentDone(node) {
    if (node.parent === null) {
      return false;
    } else {
      if (node.done) {
        return true;
      } else {
        return parentDone(node.parent);
      }
    }
  }

  function selectDrilldown(newHead) {
    var newDrill = [];
    var x = 0;
    var parent = null;
    if (newHead.length === 0) {
      parent = drilldown[x][selection[x]];
      newDrill.push(drilldown[x]);
    } else {
      parent = newHead[selection[x]];
      newDrill.push(newHead);
    }
    while (parent !== undefined && parent.hasChild) {
      x += 1;
      newDrill.push(parent.children);
      parent = parent.children[selection[x]];
    }
    setDrilldown(newDrill);
  }

  async function uploadHead(node) {
    const newName = node.value;
    const newID = node.treeID;
    const nc = node.children;
    var newChild = [];
    for (const child of nc) {
      newChild.push(child.treeID);
    }

    try {
      await db
        .collection("Goals")
        .doc(newID)
        .set(
          {
            Head: true,
            Children: newChild,
            Goal: newName,
            Done: false,
          },
          { merge: true }
        )
        .then(() => {
          //New Life Goal
        });
    } catch (e) {
      console.error(e.message);
    }
  }

  async function uploadNode(node) {
    const newName = node.value;
    const newID = node.treeID;
    const parent = node.parent;
    const nc = node.children;
    var newChild = [];
    for (const child of nc) {
      newChild.push(child.treeID);
    }

    try {
      await db
        .collection("Goals")
        .doc(newID)
        .set(
          {
            Head: false,
            Children: newChild,
            Goal: newName,
            Done: false,
          },
          { merge: true }
        )
        .then(() => {
          if (parent !== null) {
            db.collection("Goals")
              .doc(parent.treeID)
              .get()
              .then((parentNode) => {
                parentNode.ref.update({
                  Children: firestore.FieldValue.arrayUnion(newID),
                });
              });
          }
        });
    } catch (e) {
      console.error(e.message);
    }
  }

  async function editNode(node) {
    const newName = node.value;
    const newID = node.treeID;
    const parent = node.parent;
    const nc = node.children;
    var newChild = [];
    for (const child of nc) {
      newChild.push(child.treeID);
    }
    const nodeDone = node.done;

    try {
      await db
        .collection("Goals")
        .doc(newID)
        .set(
          {
            Children: newChild,
            Goal: newName,
            Done: nodeDone,
          },
          { merge: true }
        )
        .then(() => {
          if (parent !== null) {
            db.collection("Goals")
              .doc(parent.treeID)
              .get()
              .then((parentNode) => {
                parentNode.ref.update({
                  Children: firestore.FieldValue.arrayUnion(newID),
                });
              });
          }
        });
    } catch (e) {
      console.error(e.message);
    }
  }

  async function deleteNode(node) {
    const deleteID = node.treeID;
    const parent = node.parent;

    try {
      await db
        .collection("Goals")
        .doc(deleteID)
        .get()
        .then((oldDoc) => {
          const deleteDocs = oldDoc.get("Children");
          for (const child of deleteDocs) {
            backDelete(child);
          }
          if (parent !== null) {
            db.collection("Goals")
              .doc(parent.treeID)
              .get()
              .then((parentDoc) => {
                parentDoc.ref.update({
                  Children: firestore.FieldValue.arrayRemove(deleteID),
                });
              });
          }
          oldDoc.ref.delete();
        });
    } catch (e) {
      console.error(e.message);
    }
  }

  async function backDelete(id) {
    try {
      await db
        .collection("Goals")
        .doc(id)
        .get()
        .then((oldDoc) => {
          const deleteDocs = oldDoc.get("Children");
          for (const child of deleteDocs) {
            backDelete(child);
          }
          oldDoc.ref.delete();
        });
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    async function addChildren(parent, children, drill, select) {
      try {
        var currentLevel = [];
        var nextList = [];
        var nextA = null;
        for (const child of children) {
          await db
            .collection("Goals")
            .doc(child)
            .get()
            .then((subResult) => {
              const a = new GoalTree(
                subResult.id,
                subResult.get("Goal"),
                subResult.get("Done")
              );
              currentLevel.push(a);
              parent.children = a;

              if (currentLevel.length <= 1) {
                nextList = subResult.get("Children");
                nextA = a;
              } else {
                const nextFill = subResult.get("Children");
                fillChildren(a, nextFill);
              }

              if (currentLevel.length === children.length) {
                drill.push(currentLevel);
                select.push(0);
                if (nextList.length !== 0) {
                  addChildren(nextA, nextList, drill, select);
                } else {
                  setDrilldown(drill);
                  setSelection(select);
                }
              }
            });
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    async function fillChildren(parent, children) {
      try {
        for (const child of children) {
          await db
            .collection("Goals")
            .doc(child)
            .get()
            .then((subResult) => {
              const a = new GoalTree(
                subResult.id,
                subResult.get("Goal"),
                subResult.get("Done")
              );
              parent.children = a;

              const nextFill = subResult.get("Children");
              fillChildren(a, nextFill);
            });
        }
      } catch (e) {
        console.error(e.message);
      }
    }

    (async () => {
      try {
        await db
          .collection("Goals")
          .where("Head", "==", true)
          .get()
          .then((result) => {
            var tier = [];
            for (const bigGoal of result.docs) {
              const a = new GoalTree(
                bigGoal.id,
                bigGoal.get("Goal"),
                bigGoal.get("Done")
              );
              tier.push(a);
            }
            var drill = [tier];
            var select = [0];

            var x = 0;
            for (const bigGoal of result.docs) {
              if (bigGoal.id === result.docs[0].id) {
                var childList = bigGoal.get("Children");
                if (childList.length !== 0) {
                  addChildren(tier[0], childList, drill, select);
                } else {
                  setDrilldown(drill);
                  setSelection(select);
                }
              } else {
                const nextFill = bigGoal.get("Children");
                fillChildren(tier[x], nextFill);
              }
              x += 1;
            }
          })
          .catch((e) => console.log(e));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
      }}
    >
      <Dialog
        open={modalOpen}
        onClose={() => {
          setModal(false);
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter password for the board!</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              login(password);
            }}
            color="primary"
          >
            Log In
          </Button>
        </DialogActions>
      </Dialog>
      <Container
        fluid
        style={{
          textAlign: "center",
        }}
      >
        <img
          src={require("./assets/Lifed")}
          alt="Lifed"
          style={{ width: 200 }}
        />
      </Container>
      <Button
        variant="contained"
        style={{
          position: "absolute",
          right: 10,
          top: 50,
          backgroundColor: "white",
          color: "black",
        }}
        onPointerUp={() => {
          setModal(true);
        }}
      >
        Edit
      </Button>
      {auth.currentUser && (
        <IconButton
          aria-label="Add Goal"
          onPointerUp={() => {
            const newTree = new GoalTree(uuidv4(), "New", false);
            drilldown[0].push(newTree);
            setDrilldown(drilldown);
            setUpdate(!update);
            uploadHead(newTree);
          }}
          style={{
            position: "absolute",
            right: 100,
            top: 45,
            color: "#ffffff",
          }}
        >
          <AddIcon />
        </IconButton>
      )}
      <ButtonGroup variant="contained" style={{ marginBottom: 50 }}>
        <Button
          style={{
            height: 40,
            width: 300,
            fontSize: 15,
            fontWeight: "bold",
            color: "#000000",
            backgroundColor: "white",
          }}
          onClick={() => {
            setAll(false);
          }}
        >
          Active Goals
        </Button>
        <Button
          style={{
            height: 40,
            width: 300,
            fontSize: 15,
            fontWeight: "bold",
            color: "#000000",
            backgroundColor: "white",
          }}
          onClick={() => {
            setAll(true);
          }}
        >
          All Goals
        </Button>
      </ButtonGroup>
      <Container>
        {drilldown !== undefined &&
          drilldown.length !== 0 &&
          drilldown.map((valueTop, indexTop) => {
            return (
              <Container
                style={{
                  marginBottom: 80,
                }}
                key={indexTop}
              >
                <Row>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: 20, color: "white" }}
                  >
                    {indexTop <= 6 ? timeline[indexTop] : "Daily"}
                  </Typography>
                </Row>
                <Row>
                  {valueTop.map((value, index) => {
                    if (showAll || (!value.done && !parentDone(value))) {
                      return (
                        <Col key={String(value.value) + String(index)}>
                          <Card
                            className={
                              selection[indexTop] === index
                                ? "t" + String(indexTop)
                                : "t"
                            }
                            style={{
                              height: 150,
                              width: 300,
                              margin: 10,
                              backgroundColor:
                                selection[indexTop] === index
                                  ? "#ffa500"
                                  : "#ffffff",
                            }}
                            onPointerUp={() => {
                              selection[indexTop] = index;
                              setSelection(selection);
                              selectDrilldown([]);
                            }}
                          >
                            {auth.currentUser && (
                              <CardContent>
                                <TextField
                                  variant="outlined"
                                  multiline
                                  rowsMax={3}
                                  onPointerUp={(e) => {
                                    e.stopPropagation();
                                  }}
                                  style={{ height: 80 }}
                                  defaultValue={value.value}
                                  onChange={(event) => {
                                    drilldown[indexTop][index].goal =
                                      event.target.value;
                                    setDrilldown(drilldown);
                                    editNode(drilldown[indexTop][index]);
                                  }}
                                ></TextField>

                                <CardActions
                                  style={{ justifyContent: "center" }}
                                >
                                  {selection[indexTop] === index && (
                                    <IconButton
                                      aria-label="delete"
                                      onPointerUp={(e) => {
                                        e.stopPropagation();
                                        const deleteMe =
                                          drilldown[indexTop][index];
                                        var newDrill = [];
                                        for (const d in drilldown) {
                                          const drill = parseInt(d);
                                          if (drill < indexTop) {
                                            newDrill.push(drilldown[drill]);
                                          } else if (drill === indexTop) {
                                            var newTier = [];
                                            for (const tier of drilldown[
                                              drill
                                            ]) {
                                              if (tier !== deleteMe) {
                                                newTier.push(tier);
                                              }
                                            }
                                            newDrill.push(newTier);
                                          }
                                        }
                                        if (selection[indexTop] >= 1) {
                                          selection[indexTop] -= 1;
                                        }
                                        const newSelect = selection;
                                        setSelection(newSelect);
                                        if (deleteMe.parent !== null) {
                                          deleteMe.parent.removeChild(deleteMe);
                                          selectDrilldown([]);
                                        } else {
                                          selectDrilldown(newDrill[0]);
                                        }
                                        setUpdate(!update);
                                        deleteNode(deleteMe);
                                      }}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  )}
                                  <IconButton
                                    aria-label="done"
                                    onPointerUp={(e) => {
                                      e.stopPropagation();
                                      value.done = !value.done;
                                      editNode(value);
                                      setUpdate(!update);
                                    }}
                                  >
                                    {value.done && (
                                      <CheckCircleIcon
                                        style={{ color: "green" }}
                                      />
                                    )}
                                    {!value.done && <CheckCircleOutlineIcon />}
                                  </IconButton>
                                  {selection[indexTop] === index && (
                                    <IconButton
                                      aria-label="sub-goal"
                                      onPointerUp={(e) => {
                                        e.stopPropagation();
                                        const newTree = new GoalTree(
                                          uuidv4(),
                                          "New",
                                          false
                                        );
                                        if (
                                          drilldown[indexTop][index].hasChild
                                        ) {
                                          const len =
                                            drilldown[indexTop][index].children
                                              .length;
                                          drilldown[indexTop][
                                            index
                                          ].children = newTree;
                                          drilldown[indexTop + 1][
                                            len
                                          ] = newTree;
                                          setDrilldown(drilldown);
                                          setUpdate(!update);
                                        } else {
                                          drilldown[indexTop][
                                            index
                                          ].children = newTree;
                                          drilldown.push([newTree]);
                                          setDrilldown(drilldown);
                                          selection.push(0);
                                          setSelection(selection);
                                          setUpdate(!update);
                                        }
                                        uploadNode(newTree);
                                      }}
                                    >
                                      <AddIcon />
                                    </IconButton>
                                  )}
                                </CardActions>
                              </CardContent>
                            )}
                            {auth.currentUser === null && (
                              <CardContent>
                                <Typography
                                  color="textSecondary"
                                  style={{ height: 80, fontSize: 20 }}
                                >
                                  {value.value}
                                </Typography>
                                <IconButton aria-label="done" disabled={true}>
                                  {value.done && (
                                    <CheckCircleIcon
                                      style={{ color: "green" }}
                                    />
                                  )}
                                  {!value.done && <CheckCircleOutlineIcon />}
                                </IconButton>
                              </CardContent>
                            )}
                          </Card>
                        </Col>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Row>
              </Container>
            );
          })}

        {selection.map((_, index) => {
          return (
            <CurvedArrow
              key={index}
              fromSelector={".t" + String(index)}
              fromOffsetY={-70}
              toSelector={".t" + String(index + 1)}
              toOffsetY={70}
              middleX={50}
              zIndex="5"
              dynamicUpdate={true}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
