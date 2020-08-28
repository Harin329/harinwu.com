export default {
    FontRegular: 'OpenSans-Regular',
    FontBold: 'OpenSans-Bold',
    FontLight: 'OpenSans-Light',
    FontMedium: 'OpenSans-SemiBold',
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
      timeout: 100,
      /**
       * duration in ms for the smooth snap
       * [default: 300]
       **/
      duration: 300,
    }
  };