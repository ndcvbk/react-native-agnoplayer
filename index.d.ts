import { Component, RefObject } from 'react';
import { ViewStyle, NativeEventEmitter, NativeModules } from 'react-native';

/**
 * Configuration properties for the Agno Player
 */
export type ConfigProperties = {
  itemTitle?: string;
  autoPlay?: boolean;
  isFullScreen?: boolean;
  startOffset?: number;
  muteOnAutoplay?: boolean;
  playerSkinColor?: string;
  posterURL?: string;
  showAds?: boolean;
  adTag?: string;
  showTestAd?: boolean;
  playButtonBackgroundColor?: string;
  customPlayButton?: string;
  hideProgressBarInAds?: boolean;
  skipAds?: boolean;
  hideControls?: boolean;
  assetType?: string;
  muxId?: string;
  showTitle?: boolean;
  showPlayButtonOnPause?: boolean;
  showShareButton?: boolean;
  chromecastEnabled?: boolean;
  loop?: boolean;
  googleAnalyticsEnabled?: boolean;
  googleAnalyticsId?: string;
  disablePIPMode?: boolean;
};

/**
 * Data emitted on full screen event
 */
export type OnFullScreenData = Readonly<{
  isFullScreenRequested: boolean;
  sessionKey: string;
  duration: number;
  isPlaying: boolean;
  imageUrl: string;
}>;

/**
 * Data emitted when player loads
 */
export type onLoadData = Readonly<{
  duration: string;
  sessionKey: string;
}>;

/**
 * Data emitted when player state changes
 */
export type PlayerStateData = Readonly<{
  state: string;
  sessionKey: string;
}>;

export type ConfigProps = Readonly<ConfigProperties | NodeRequire>;

type SourceType = 'VOD' | 'TTS' | 'LIVE' | 'PODCAST';

type PlayerState =
  | 'STATE_IDLE'
  | 'STATE_READY'
  | 'STATE_BUFFERING'
  | 'STATE_PLAYING'
  | 'STATE_END'
  | 'STATE_UNKNOWN';

export const AssetSourceType: { [key in SourceType]: key };
export const AgnoPlaybackState: { [key in PlayerState]: key };

/**
 * Props for the AgnoPlayerView component
 */
export interface AgnoPlayerViewProps {
  sessionKey?: string;
  brand?: string;
  videoId?: string;
  url?: string;
  style?: ViewStyle;
  playerConfig?: ConfigProperties;
  onFullScreen?: (e: OnFullScreenData) => void;
  onLoad?: (e: onLoadData) => void;
  onPlayerStateChanged?: (e: PlayerStateData) => void;
  onPipModeChanged?: (e: boolean) => void;
}

/**
 * Ref methods available on AgnoPlayerView component
 */
export interface AgnoPlayerViewRef {
  /** Play the video */
  play: () => void;
  /** Pause the video */
  pause: () => void;
  /** Seek to a specific position in milliseconds */
  seekTo: (position: number) => void;
  /** Close the full screen player */
  closeFullScreenPlayer: () => void;
  /** Lock orientation to portrait */
  lockToPortrait: () => void;
  /** Lock orientation to landscape */
  lockToLandscape: () => void;
  /** Mute or unmute audio */
  shouldMuteAudio: (value: boolean) => void;
  /** Enter or exit Picture-in-Picture mode */
  changePipMode: (value: boolean) => void;
  /** Enter Picture-in-Picture mode */
  enterPipMode: () => void;
}

/**
 * Native module for Agno Player
 */
export interface AgnoPlayNativeModule {
  nativeModule: typeof NativeModules.AgnoPlay | typeof NativeModules.AgnoPlayManager;
  emitter: NativeEventEmitter;
}

/**
 * AgnoPlayerView Component
 * 
 * A React Native component for playing videos using Agno Player
 * 
 * @example
 * ```tsx
 * import AgnoPlayerView from 'react-native-agnoplayer';
 * import { useRef } from 'react';
 * 
 * export const MyPlayer = () => {
 *   const playerRef = useRef<AgnoPlayerViewRef>(null);
 * 
 *   return (
 *     <AgnoPlayerView
 *       ref={playerRef}
 *       sessionKey="main"
 *       videoId="Mbdskc9KsAii"
 *       playerConfig={{
 *         autoPlay: true,
 *         showAds: true,
 *       }}
 *       onLoad={(data) => console.log('Loaded:', data)}
 *       onPlayerStateChanged={(data) => console.log('State:', data.state)}
 *       onFullScreen={(data) => console.log('Full screen:', data.isFullScreenRequested)}
 *     />
 *   );
 * };
 * ```
 */
export default class AgnoPlayerViewModule extends Component<
  AgnoPlayerViewProps,
  any,
  AgnoPlayerViewRef
> {}