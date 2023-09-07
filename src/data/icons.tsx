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
import NextHover from '../assets/icons/next_hover.svg'

// Repeat
import RepeatNormal from '../assets/icons/repeat_normal.svg';
import RepeatHover from '../assets/icons/repeat_hover.svg';
import RepeatClicked from '../assets/icons/repeat_clicked.svg';
import RepeatClickedHover from '../assets/icons/repeat_clicked_hover.svg'

export const PrevIcon = {
    normal: PrevNormal,
    normal_hover: PrevHover,
    click: null,
    click_hover: null,
    title: "Previous",
    altTitle: null
}

export const NextIcon = {
    normal: NextNormal,
    normal_hover: NextHover,
    click: null,
    click_hover: null,
    title: "Next",
    altTitle: null
}

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
    play: {
        normal: PlayNormal,
        normal_hover: PlayHover,
        click: PlayClicked,
        click_hover: PlayClickedHover,
        title: "Play",
        altTitle: "Pause"
    },
    repeat: {
        normal: RepeatNormal,
        normal_hover: RepeatHover,
        click: RepeatClicked,
        click_hover: RepeatClickedHover,
        title: "Enable Repeat",
        altTitle: "Disable Repeat"
    }
};