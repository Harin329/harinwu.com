export default {
  FontRegular: "Gotham-Book",
  FontBold: "Gotham-Bold",
  FontLight: "Gotham-Light",
  FontMedium: "Gotham-Medium",
  snapConfig: {
    /**
     * snap-destination for x and y axes
     * should be a valid css value expressed as px|%|vw|vh
     **/
    snapDestinationX: "0%",
    snapDestinationY: "100%",
    /**
     * time in ms after which scrolling is considered finished
     * [default: 100]
     **/
    timeout: 0,
    /**
     * duration in ms for the smooth snap
     * [default: 300]
     **/
    duration: 300,
  },
  black: "#393c41",
  gray: "#5c5e62",
  seeMoreButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 329,
    height: "50px",
    borderRadius: 100,
    backgroundColor: "rgba(0,0,0, 0.7)",
    color: "#ffffff",
    fontFamily: "Gotham-Medium",
    paddingTop: 10,
    fontSize: 12,
    margin: 5,
  },
  drawerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: "50px",
    fontFamily: "Gotham-Medium",
    paddingTop: 10,
    fontSize: 12,
    color: "#393c41"
  },
};
