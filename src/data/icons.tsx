// Shuffle
import ShuffleNormal from '../assets/icons/shuffle_normal.svg';
import ShuffleHover from '../assets/icons/shuffle_hover.svg';
import ShuffleClicked from '../assets/icons/shuffle_clicked.svg';
import ShuffleClickedHover from '../assets/icons/shuffle_clicked_hover.svg'

// Prev
import PrevNormal from '../assets/icons/prev_normal.svg';
import PrevHover from '../assets/icons/prev_hover.svg';

// Play Pause
import PlayNormal from '../assets/icons/play_normal.svg';
import PlayHover from '../assets/icons/play_hover.svg';
import PlayClicked from '../assets/icons/pause_normal.svg';
import PlayClickedHover from '../assets/icons/pause_hover.svg';

// Next
import NextNormal from '../assets/icons/next_normal.svg';
import NextHover from '../assets/icons/next_hover.svg';

// Repeat
import RepeatNormal from '../assets/icons/repeat_normal.svg';
import RepeatHover from '../assets/icons/repeat_hover.svg';
import RepeatClicked from '../assets/icons/repeat_clicked.svg';
import RepeatClickedHover from '../assets/icons/repeat_clicked_hover.svg';

// Playing
import PlayingNormal from '../assets/icons/playing_normal.svg';
import PlayingHover from '../assets/icons/playing_hover.svg';
import PlayingClicked from '../assets/icons/playing_clicked.svg';
import PlayingClickedHover from '../assets/icons/playing_clicked_hover.svg';

// Lyrics
import LyricsNormal from '../assets/icons/lyrics_normal.svg';
import LyricsHover from '../assets/icons/lyrics_hover.svg';
import LyricsClicked from '../assets/icons/lyrics_clicked.svg';
import LyricsClickedHover from '../assets/icons/lyrics_clicked_hover.svg';

// Queue
import QueueNormal from '../assets/icons/queue_normal.svg';
import QueueHover from '../assets/icons/queue_hover.svg';
import QueueClicked from '../assets/icons/queue_clicked.svg';
import QueueClickedHover from '../assets/icons/queue_clicked_hover.svg';

// Devices
import DevicesNormal from '../assets/icons/devices_normal.svg';
import DevicesHover from '../assets/icons/devices_hover.svg'

// Volume
import VolumeNormal from '../assets/icons/volume_normal.svg';
import VolumeHover from '../assets/icons/volume_hover.svg';
import VolumeClicked from '../assets/icons/mute_normal.svg';
import VolumeClickedHover from '../assets/icons/mute_hover.svg';

// Fullscreen
import FullNormal from '../assets/icons/fullscreen_normal.svg';
import FullHover from '../assets/icons/fullscreen_hover.svg'

interface IconMapping {
    normal?: string;
    normal_hover?: string;
    click?: string;
    click_hover?: string;
    title?: string;
    altTitle?: string;
}

export const iconMappings: Record<string, IconMapping> = {
    shuffle: {
        normal: ShuffleNormal,
        normal_hover: ShuffleHover,
        click: ShuffleClicked,
        click_hover: ShuffleClickedHover,
        title: "Enable Shuffle",
        altTitle: "Disable Shuffle"
    },
    prev: {
        normal: PrevNormal,
        normal_hover: PrevHover,
        click: PrevNormal,
        click_hover: PrevHover,
        title: "Previous",
        altTitle: undefined
    },
    play: {
        normal: PlayNormal,
        normal_hover: PlayHover,
        click: PlayClicked,
        click_hover: PlayClickedHover,
        title: "Play",
        altTitle: "Pause"
    },
    next: {
        normal: NextNormal,
        normal_hover: NextHover,
        click: NextNormal,
        click_hover: NextHover,
        title: "Next",
        altTitle: undefined
    },
    repeat: {
        normal: RepeatNormal,
        normal_hover: RepeatHover,
        click: RepeatClicked,
        click_hover: RepeatClickedHover,
        title: "Enable Repeat",
        altTitle: "Disable Repeat"
    },
    lyrics: {
        normal: LyricsNormal,
        normal_hover: LyricsHover,
        click: LyricsClicked,
        click_hover: LyricsClickedHover,
        title: "Lyrics",
        altTitle: "Lyrics"
    },
    playing: {
        normal: PlayingNormal,
        normal_hover: PlayingHover,
        click: PlayingClicked,
        click_hover: PlayingClickedHover,
        title: "Now Playing View",
        altTitle: "Now Playing View"
    },
    queue: {
        normal: QueueNormal,
        normal_hover: QueueHover,
        click: QueueClicked,
        click_hover: QueueClickedHover,
        title: "Queue",
        altTitle: "Queue"
    },
    devices: {
        normal: DevicesNormal,
        normal_hover: DevicesHover,
        click: DevicesNormal,
        click_hover: DevicesHover,
        title: "Connect to a device",
        altTitle: undefined
    },
    volume: {
        normal: VolumeNormal,
        normal_hover: VolumeHover,
        click: VolumeClicked,
        click_hover: VolumeClickedHover,
        title: "Mute",
        altTitle: "Unmute"
    },
    full: {
        normal: FullNormal,
        normal_hover: FullHover,
        click: FullNormal,
        click_hover: FullHover,
        title: "Full screen",
        altTitle: undefined
    },
};