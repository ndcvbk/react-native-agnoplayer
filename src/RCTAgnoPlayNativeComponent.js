import { requireNativeComponent } from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

export const Commands = codegenNativeCommands({
  supportedCommands: [
    'play',
    'pause',
    'seekTo',
    'shouldMuteAudio',
    'changePipMode',
    'lockToPortrait',
    'lockToLandscape',
    'closeFullScreenPlayer',
  ],
});

export default requireNativeComponent('RCTAgnoPlay');
