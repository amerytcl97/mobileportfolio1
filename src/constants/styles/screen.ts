import { StyleSheet } from 'react-native';

export const SCREEN_PADDING_LEFT = 20;
export const SCREEN_PADDING_RIGHT = 20;
export const CONTENT_WIDTH = `${100 - (SCREEN_PADDING_LEFT - 10)}%`;

export const SCREEN_STYLE = StyleSheet.create({
  SCREEN: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  SCREEN__CENTER: {
    alignItems: 'center',
    // justifyContent: "center",
  },
  SCREEN__HEADER: {
    height: '15%',
    width: CONTENT_WIDTH,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: "5%",
  },
  SCREEN__CONTENT: {
    flexGrow: 1,
    width: '100%',
  },
  SCREEN$$CONTENT__PADDING$$LEFT__ONLY: {
    flex: 1,
    flexGrow: 1,
    paddingLeft: SCREEN_PADDING_LEFT,
  },
  SCREEN__FOOTER: {
    height: '12%',
    width: '100%',
    marginTop: 15,
    alignSelf: 'flex-end',
    paddingLeft: SCREEN_PADDING_LEFT,
    paddingRight: SCREEN_PADDING_RIGHT,
    position: 'absolute',
    bottom: 0,
    zIndex: 99,
    // backgroundColor: SCREEN_BACKGROUND_THEME,
    // shadowColor: "black",
    // shadowOffset: {
    //     width: 0,
    //     height: -10,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 10,
    // elavation: 29,
    paddingBottom: 15,
  },
  SCREEN__SAFE: {
    flex: 1,
    backgroundColor: 'inherit',
    height: '100%',
  },
  SCREEN__PADDING_LEFT: {
    paddingLeft: SCREEN_PADDING_LEFT,
  },
  SCREEN__PADDING_RIGHT: {
    paddingRight: SCREEN_PADDING_RIGHT,
  },
  SCREEN__PADDING_HORIZONTAL: {
    paddingLeft: SCREEN_PADDING_LEFT,
    paddingRight: SCREEN_PADDING_RIGHT,
  },
});
