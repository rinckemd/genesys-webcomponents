'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d3bc59d7.js');
const usage = require('./usage-da9572bf.js');
const logError = require('./log-error-ddbca3a0.js');

const iconNameMap = {
  // Agent
  'ic-agent': 'agent',
  consultant: 'agent',
  'ic-agent-group': 'agent-group',
  // User
  'pc-user': 'user',
  'ic-person': 'user',
  customer: 'user',
  interactions: 'user-interactions',
  'interaction-sound': 'user-interactions',
  'add-user': 'user-add',
  'ic-contact-add': 'user-add',
  'pc-group': 'user-group',
  'ic-people': 'user-group',
  'ic-group': 'user-group',
  users: 'user-group',
  'ic-contact-id': 'user-contact-id',
  contact: 'user-contact-id',
  'person-circle': 'user-circle',
  directory: 'user-directory',
  'multi-agent-lines': 'user-directory',
  // Team Communicator
  // Co-Browse
  'ic-cobrowse': 'cobrowse',
  screenshare: 'cobrowse',
  // Faces
  'ic-face-happy': 'face-happy',
  'ic-face-neutral': 'face-neutral',
  'ic-face-sad': 'face-sad',
  'ic-face-happy-solid': 'face-happy-solid',
  'ic-face-sad-solid': 'face-sad-solid',
  // Product Specific Icons
  // - CJV
  'cc-custom-default': 'cjv-custom-default',
  'cc-web-session': 'cjv-web-session',
  'cc-delivery': 'cjv-delivery',
  'cc-policy-contract': 'cjv-policy-contract',
  'cc-generic-application': 'cjv-generic-application',
  'cc-finance-invoice': 'cjv-finance-invoice',
  // - Product Logos
  'beyond-logo': 'product-logo-beyond',
  'ic-special-g-brandmark': 'product-logo-g',
  'logo-genesys': 'product-logo-g',
  // - Left Toolbar
  'interactions-alpha': 'toolbar-interactions',
  'interactions-off-alpha': 'toolbar-interactions-disable',
  assist: 'toolbar-assist',
  'assist-off': 'toolbar-assist-disable',
  'chat-alpha': 'toolbar-chat',
  'chat-off-alpha': 'toolbar-chat-disable',
  'phone-alpha': 'toolbar-phone',
  'phone-off-alpha': 'toolbar-phone-disable',
  'phone-active-1': 'toolbar-phone-active-1',
  'phone-active-2': 'toolbar-phone-active-2',
  'phone-active-3': 'toolbar-phone-active-3',
  'video-alpha': 'toolbar-video',
  'video-off-alpha': 'toolbar-video-disable',
  'apps-alpha': 'toolbar-apps',
  apps: 'toolbar-apps-disable',
  'favs-alpha': 'toolbar-favourite',
  'inbox-alpha': 'toolbar-inbox',
  question: 'toolbar-help',
  // Phone
  'ic-phone': 'phone',
  'notification-phone': 'phone',
  'ic-phone-forward': 'phone-forward',
  'call-forward': 'phone-forward',
  'call-forward-alpha': 'phone-forward',
  'ic-phone-bell': 'phone-bell',
  'phone-ring': 'phone-bell',
  'ic-phone-voice': 'phone-voice',
  'call-volume': 'phone-voice',
  'ic-phone-disabled': 'phone-disable',
  'ic-phone-disable': 'phone-disable',
  'phone-off': 'phone-disable',
  'cc-disconnected-system': 'phone-disable',
  'cc-disconnected': 'phone-disable',
  'ic-phone-hold': 'phone-hold',
  'call-history': 'phone-call-history',
  'outbound-call': 'phone-outbound',
  'cc-outbound-call': 'phone-outbound',
  'missed-call': 'phone-missed-call',
  'cc-missed-inbound': 'phone-missed-call',
  callback: 'phone-callback',
  hangup: 'phone-hangup',
  'ic-phone-hang-up': 'phone-hangup',
  'ic-voicemail': 'voicemail',
  'ic-dialpad': 'phone-dialpad',
  'ic-phone-dail': 'phone-dialpad',
  dialpad: 'phone-dialpad',
  'ic-status-call-dialing': 'phone-dialpad',
  // Chat
  'ic-status-chat': 'chat',
  'ic-chat': 'chat',
  'ic-chat-oval': 'chat',
  'notification-chat': 'chat',
  'cc-webchat-bot': 'chat',
  'cc-webchat-missed': 'chat',
  'ic-text-detail': 'chat',
  'iic-chat-oval-close': 'chat-close',
  'iic-chat-end': 'chat-close',
  'ic-chat-disable': 'chat-disable',
  'chat-off': 'chat-disable',
  'ic-chat-oval-multi': 'chat-multi',
  'ic-chat-multi': 'chat-multi',
  'chat-alert': 'chat-bell',
  // Message
  'ic-email': 'message-email',
  'ic-status-email': 'message-email',
  'ic-cx-24-flat-mail': 'message-email',
  envelope: 'message-email',
  'notification-email': 'message-email',
  'reply-standard': 'message-reply',
  'forward-standard': 'message-forward',
  'ic-attach': 'attachment',
  paperclip: 'attachment',
  // Video
  'ic-video': 'video',
  'ic-video-disable': 'video-disable',
  'video-off': 'video-disable',
  'ic-audio-rec': 'microphone',
  mic: 'microphone',
  'ic-audio-rec-disable': 'microphone-disable',
  'mic-off': 'microphone-disable',
  'mic-talking': 'microphone-talking',
  // Audio
  'ic-audio-yes': 'volume-up',
  'ic-audio-no': 'volume-none',
  'volume-off-alt': 'volume-none',
  'ic-audio-disable': 'volume-disable',
  'volume-off': 'volume-disable',
  'ic-audio-music': 'music',
  // Media Player
  'ic-control-skip-left': 'control-skip-left',
  backward: 'control-skip-left',
  'ic-control-skip-right': 'control-skip-right',
  forward: 'control-skip-right',
  'ic-control-backward': 'control-start',
  'fast-backward': 'control-start',
  'ic-control-forward': 'control-end',
  'fast-forward': 'control-end',
  'ic-slide-fwd': 'control-slide-forward',
  'step-forward': 'control-slide-forward',
  'ic-slide-back': 'control-slide-back',
  'step-backward': 'control-slide-back',
  play: 'control-play',
  'ic-24-control-play-solid': 'control-play',
  'ic-control-stop': 'control-stop',
  stop: 'control-stop',
  pause: 'control-pause',
  'ic-24-control=pause-solid': 'control-pause',
  // Devices
  'ic-generic-pc': 'device-pc',
  monitor: 'device-pc',
  'ic-video-cam-1': 'webcam',
  'ic-videocam-2': 'webcam',
  'ic-video-cam-1-disable': 'webcam-disable',
  'ic-videocam-2-disable': 'webcam-disable',
  'ic-sms-cancel': 'sms-close',
  'sms-cancel': 'sms-close',
  'ic-sms-message': 'sms',
  'sms-message': 'sms',
  'ic-generic-laptop': 'device-laptop',
  'ic-generic-tablet': 'device-tablet',
  'ic-camera': 'device-camera',
  'ic-host': 'device-server',
  'ic-phones': 'device-cellphone',
  'ic-generic-mobile-phone': 'device-headphones',
  // Folder
  'ic-folder': 'folder',
  'ic-folder-open': 'folder-open',
  'ic-folder-add': 'folder-add',
  // File Types
  'file-o': 'file',
  'ic-page-single': 'file',
  'ic-doc-list': 'file',
  'ic-doc-generic': 'file',
  'files-o': 'file-all',
  'ic-page-multi': 'file-all',
  'ic-doc-all': 'file-all',
  'ic-doc-report-b': 'file-report',
  image: 'file-image-landscape',
  'ic-picture': 'file-image-landscape',
  'ic-doc-detail': 'file-text',
  preview: 'file-preview',
  'ic-page-search': 'file-preview',
  // File Transfer
  unassign: 'upload',
  'ic-upload': 'upload',
  'ic-download': 'download',
  // External Link
  // Comments
  feedback: 'comments',
  'comment-ellipsis': 'comments',
  'comment-ellipsis-off': 'comments-disable',
  'ic-thumbs-up': 'thumbs-up',
  'ic-thumbs-down': 'thumbs-down',
  // Editing
  'ic-24-graph-edit': 'edit',
  'ic-graph-edit': 'edit',
  'ic-pencil': 'edit',
  'ic-multiples': 'clone',
  'ic-clone': 'clone',
  'ic-copy': 'copy',
  'ic-paste': 'paste',
  'ic-clipboard': 'clipboard',
  scissors: 'cut',
  'ic-cut': 'cut',
  'ic-trash': 'delete',
  'ic-refresh-with-feedback': 'refresh',
  'ic-reload': 'refresh',
  'ic-refresh': 'refresh',
  'ic-reset': 'reset',
  // Resizing Controls
  'pop-out': 'window-popout',
  'ic-outbound': 'window-popout',
  'ic-exit-full-screen': 'window-contract',
  'screen-small': 'window-contract',
  'ic-window-contract': 'window-contract',
  'ic-full-screen': 'window-fullscreen',
  'screen-full': 'window-fullscreen',
  'ic-window-expand': 'window-fullscreen',
  'ic-drag-out': 'window-drag-out',
  'ic-actual-size': 'actual-size',
  // Print / Editor Toolbar
  // Applications
  'ic-app-generic': 'app-generic',
  'ic-app-chart': 'app-chart',
  'ic-app-layout': 'app-layout',
  template: 'app-layout',
  'ic-biz-attribute': 'app-table',
  'ic-app-table': 'app-table',
  // Miscellaneous
  'ic-circle-add': 'add-circle',
  'plus-circle': 'add-circle',
  'ic-timeline': 'timeline',
  history: 'timeline',
  'ic-clock': 'clock-outline',
  'ic-clock-b': 'clock',
  'ic-quotes': 'quote-right',
  'robot-head': 'bot',
  'robot-circle': 'bot',
  education: 'skills',
  'ic-skills': 'skills',
  'ic-campaign': 'campaign',
  'ic-actionable': 'bolt',
  'ic-palette': 'palette',
  'ic-tenant': 'tenant',
  cube: 'tenant',
  'ic-lunch': 'lunch',
  cubes: 'configuration',
  'ic-configuration': 'configuration',
  'ic-stamp': 'stamp',
  'ic-ivr': 'record',
  'ic-follow': 'follow',
  'paint-bucket': 'paint',
  'ic-dash': 'dash',
  'ic-generic': 'generic',
  signal: 'low-bandwidth',
  // Settings
  'ic-settings-gear': 'settings',
  'ic-settings-gears': 'settings',
  cog: 'settings',
  'reset-view': 'settings',
  'ic-dashtab-settings': 'settings',
  cogs: 'settings',
  'ic-locked': 'lock',
  'ic-secure': 'lock',
  'pause-secure': 'lock',
  'ic-link': 'link',
  'ic-unlocked': 'unlock',
  'ic-unlinked': 'unlink',
  'link-broken': 'unlink',
  'ic-certificate': 'certificate',
  'ic-access': 'key',
  'ic-sun-default': 'sun',
  'ic-moon-default': 'moon',
  'ic-app-all': 'view-all',
  'ic-cells': 'view-cells',
  'customize-columns': 'view-cells',
  'ic-view-lists': 'view-lists',
  'ic-view-list': 'view-list',
  list: 'view-list',
  'ic-view-stacked': 'view-stacked',
  'stacked-mode': 'view-stacked',
  'ic-view-grid': 'view-grid',
  'grid-mode': 'view-grid',
  'ic-video-roster': 'view-roster',
  'ic-inspect': 'inspect',
  eye: 'inspect',
  'ic-status-monitored-yes': 'inspect',
  'ic-inspect-disable': 'inspect-disable',
  hide: 'inspect-disable',
  whistle: 'coaching',
  // 3rd Party and Social
  'ic-rss': 'rss',
  'ic-rss-square': 'rss',
  'ic-twitter': 'twitter',
  'ic-twitter-square': 'twitter',
  'twitter-white-on-blue': 'twitter',
  'ic-facebook-square': 'facebook',
  'ic-linkedin-square': 'linkedin',
  'ic-share': 'share',
  'ic-sharethis': 'share',
  'linkedin-1': 'linkedin',
  'viber-icon': 'viber',
  'at-thin': 'at',
  // Arrows and Sets
  'ic-arrow-up': 'arrow-up',
  'long-up-arrow': 'arrow-up',
  'ic-arrow-down': 'arrow-down',
  'ic-arrow-left': 'arrow-left',
  'ic-arrow-right': 'arrow-right',
  'ic-escalate': 'arrow-up-right',
  'ic-out-small': 'arrow-up-left',
  'ic-in-small': 'arrow-down-right',
  'ic-iw-arrow-outline-in': 'arrow-down-right',
  'ic-chevron-left': 'chevron-left',
  'ic-chevron-right': 'chevron-right',
  'ic-transfer': 'transfer',
  exchange: 'transfer',
  // Charts
  'ic-bar-graph-variable-1': 'graph-bar-horizontal',
  'ic-graph-barline': 'graph-bar-horizontal',
  'ic-24-graph-bar': 'graph-bar-horizontal',
  'ic-graph-bar': 'graph-bar-horizontal',
  'ic-graph-stack': 'graph-bar-horizontal',
  'ic-24-graph-stack': 'graph-bar-horizontal',
  'ic-bar-graph-variable-2': 'graph-bar-vertical',
  'ic-24-graph-bar-vertical': 'graph-bar-vertical',
  'ic-24-graph-stack-vertical': 'graph-bar-vertical',
  'ic-graph-line': 'graph-line',
  'ic-graph-chart': 'graph-chart',
  'ic-graph-spark': 'graph-spark',
  'ic-pie-chart': 'graph-pie',
  // Location
  'ic-pin-time': 'pin-location',
  'ic-pin': 'pin-location',
  marker: 'pin-location',
  'thumbtack-on': 'pin',
  'ic-pinned': 'pin',
  'ic-server': 'server',
  'ic-globe': 'globe',
  'ic-home': 'home',
  house: 'home',
  'ic-cloud-b': 'cloud',
  'up-cloud': 'cloud',
  'ic-cloud-a': 'cloud-outline',
  'ic-site': 'site',
  building: 'site',
  // UI Icons
  'ic-search': 'search',
  'magnifying-glass': 'search',
  'ic-calendar-generic': 'calendar',
  'ic-calendar-month': 'calendar',
  'ic-calendar-month-highlight': 'calendar',
  'ic-calendar-day': 'calendar',
  'calendar-days': 'calendar',
  'calendar-range': 'calendar',
  'ic-select-no': 'checkbox',
  'ic-checkbox': 'checkbox',
  'ic-checkbox-tick': 'checkbox-active',
  'ic-checkbox-tick-lock': 'checkbox-active',
  'ic-checklist-tick-lock': 'checkbox-active',
  'check-square': 'checkbox-active',
  'ic-select-yes': 'checkbox-partial',
  'ic-radio': 'radio',
  'ic-radio-active': 'radio-active',
  'radio-button': 'radio-active',
  'ic-add': 'add',
  plus: 'add',
  'ic-iw-circle-no-add': 'add',
  'ic-close': 'close',
  'close-x': 'close',
  remove: 'close',
  'ic-arrow-solid-up': 'arrow-solid-up',
  'ic-expand-up': 'arrow-solid-up',
  'caret-up': 'arrow-solid-up',
  'ic-search-previous': 'arrow-solid-up',
  'chevron-circle-up': 'arrow-solid-up',
  'ic-arrow-solid-down': 'arrow-solid-down',
  'ic-expand-down': 'arrow-solid-down',
  'caret-down': 'arrow-solid-down',
  'ic-search-next': 'arrow-solid-down',
  'chevron-circle-down': 'arrow-solid-down',
  'ic-arrow-solid-left': 'arrow-solid-left',
  'ic-expand-left': 'arrow-solid-left',
  'caret-left': 'arrow-solid-left',
  'ic-control-left': 'arrow-solid-left',
  'chevron-circle-left': 'arrow-solid-left',
  'ic-arrow-solid-right': 'arrow-solid-right',
  'ic-expand-right': 'arrow-solid-right',
  'caret-right': 'arrow-solid-right',
  'ic-control-right': 'arrow-solid-right',
  'chevron-circle-right': 'arrow-solid-right',
  'ic-dropdown-arrow': 'chevron-small-down',
  'ic-iw-circle-no-chevron-down': 'chevron-small-down',
  'ic-arrow-accordian': 'chevron-small-down',
  'ic-iw-circle-no-chevron-up': 'chevron-small-up',
  'ic-chevron-small-left': 'chevron-small-left',
  'angle-left': 'chevron-small-left',
  'ic-chevron-small-right': 'chevron-small-right',
  'angle-right': 'chevron-small-right',
  'ic-arrow-left-dbl': 'chevron-double-left',
  'ic-disclosure-left': 'chevron-double-left',
  'ic-arrow-right-dbl': 'chevron-double-right',
  'ic-arrow-disclosure': 'chevron-double-right',
  'ic-stars': 'rating-active',
  'favs-full': 'rating-active',
  favs: 'rating-active',
  star: 'rating-active',
  'ic-star-outline': 'rating',
  'ic-star-half': 'rating-partial',
  'ic-tick': 'checkmark',
  'ic-small-checkmark': 'checkmark',
  check: 'checkmark',
  'ic-campaign-done': 'checkmark',
  'ic-more': 'menu-kebab-vertical',
  'ellipsis-v': 'menu-kebab-vertical',
  'ellipsis-h': 'menu-kebab-horizontal',
  'ic-filter': 'filter',
  'ic-menu-hamburger': 'menu',
  bars: 'menu',
  'ic-alert-checkmark': 'alert-success',
  'ic-login-checkmark': 'alert-success',
  'check-circle': 'alert-success',
  'ic-alert-triangle': 'alert-warning-triangle',
  'ic-alert-octo': 'alert-warning-octogon',
  'ic-alert-circle': 'alert-warning-octogon',
  'ic-iw-done-and-stop': 'alert-warning-octogon',
  warning: 'alert-warning-octogon',
  'ic-tag': 'tag',
  'ic-tag-stat-remove': 'tag-remove',
  'ic-tag-stat-add': 'tag-add',
  'chevron-circle-collapse-double': 'collapse',
  'chevron-circle-expand-double': 'expand',
  'ic-grip-horizontal': 'grab-horizontal',
  'ic-grab': 'grab-horizontal',
  'ic-grip-vertical': 'grab-vertical',
  'ic-grab-vertical': 'grab-vertical',
  'sign-out': 'logout',
  'ic-out': 'logout',
  'ic-export': 'logout',
  // Alerts
  'ic-status-call-ringing': 'bell',
  bell2: 'bell',
  'ic-bell': 'bell',
  'ic-bug': 'bug',
  'ic-alert-info': 'alert-info',
  'ic-login-info': 'alert-info',
  'info-thick': 'alert-info',
  // Zoom
  'ic-zoom-in': 'zoom-in',
  'magnifying-glass-plus': 'zoom-in',
  'ic-zoom-out': 'zoom-out',
  'magnifying-glass-minus': 'zoom-out'
};

const legacyIconNames = [
  'add-user',
  'align-center',
  'align-left',
  'align-right',
  'angle-down',
  'angle-left',
  'angle-right',
  'angle-up',
  'apps-alpha',
  'apps',
  'arrow-s',
  'arrows-h',
  'arrows-v',
  'assist-off',
  'assist',
  'backward',
  'bandage',
  'bars',
  'bell2',
  'beyond-logo',
  'bold',
  'border-dashed',
  'border-dotted',
  'border-solid',
  'btmleft',
  'btmright',
  'btn-group-choose',
  'building',
  'button',
  'calendar-days',
  'calendar-dots-day',
  'calendar-dots-month',
  'calendar-dots-week',
  'calendar-range',
  'call-forward-alpha',
  'call-forward',
  'call-history',
  'call-volume',
  'callback',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
  'cc-custom-default',
  'cc-delivery',
  'cc-disconnected-system',
  'cc-disconnected',
  'cc-finance-invoice',
  'cc-generic-application',
  'cc-inbound-queue',
  'cc-inbound',
  'cc-missed-inbound',
  'cc-outbound-call',
  'cc-policy-contract',
  'cc-web-session',
  'cc-webchat-bot',
  'cc-webchat-missed',
  'chat-alert-muted',
  'chat-alert',
  'chat-alpha',
  'chat-off-alpha',
  'chat-off',
  'check-circle',
  'check-square',
  'check',
  'chevron-circle-collapse-double',
  'chevron-circle-down',
  'chevron-circle-expand-double',
  'chevron-circle-left',
  'chevron-circle-right',
  'chevron-circle-up',
  'chevron-down',
  'chevron-up',
  'circle',
  'close-preview',
  'close-x',
  'cog',
  'comet',
  'comment-ellipsis-off',
  'comment-ellipsis',
  'consultant',
  'contact',
  'cube',
  'cubes',
  'customer',
  'customize-columns',
  'dialpad',
  'diamond',
  'directory',
  'drop-down',
  'ellipsis-h',
  'ellipsis-v',
  'envelope',
  'eye',
  'fast-backward',
  'fast-forward',
  'favs-alpha',
  'favs-full',
  'favs',
  'feedback',
  'file-o',
  'files-o',
  'forward',
  'genesys-logo-full',
  'hangup',
  'history',
  'horz-container',
  'house',
  'ic-24-control-pause-solid',
  'ic-24-control-pause',
  'ic-24-control-play-solid',
  'ic-24-control-play',
  'ic-24-control-stop',
  'ic-24-graph-bar-stack-vertical',
  'ic-24-graph-bar-vertical',
  'ic-24-graph-bar',
  'ic-24-graph-edit',
  'ic-24-graph-grid-cell',
  'ic-24-graph-grid',
  'ic-24-graph-line',
  'ic-24-graph-stack',
  'ic-24-graph-variable-2',
  'ic-48-adjacent',
  'ic-48-all',
  'ic-48-control-pause',
  'ic-48-control-play',
  'ic-48-incoming',
  'ic-48-outgoing',
  'ic-access',
  'ic-actionable-disable',
  'ic-actionable-notset',
  'ic-actionable',
  'ic-add-bold',
  'ic-add',
  'ic-adjust',
  'ic-agent-add',
  'ic-agent-edit',
  'ic-agent-group',
  'ic-agent-like',
  'ic-agent-offline',
  'ic-agent-ready-partial',
  'ic-agent-ready',
  'ic-agent-search',
  'ic-agent-time',
  'ic-agent-unavailable',
  'ic-agent',
  'ic-aix',
  'ic-alert-checkmark',
  'ic-alert-circle',
  'ic-alert-info',
  'ic-alert-octo',
  'ic-alert-triangle',
  'ic-app-all',
  'ic-app-chart',
  'ic-app-generic',
  'ic-app-layout',
  'ic-app-table',
  'ic-archive',
  'ic-arrow-accordion',
  'ic-arrow-disclosure',
  'ic-arrow-down',
  'ic-arrow-left-dbl',
  'ic-arrow-left',
  'ic-arrow-popover',
  'ic-arrow-right-dbl',
  'ic-arrow-right',
  'ic-arrow-solid-down',
  'ic-arrow-solid-left',
  'ic-arrow-solid-right',
  'ic-arrow-solid-up',
  'ic-arrow-up',
  'ic-attach',
  'ic-audio-disable',
  'ic-audio-music',
  'ic-audio-no',
  'ic-audio-rec-disable',
  'ic-audio-rec',
  'ic-audio-voice-disable',
  'ic-audio-voice',
  'ic-audio-yes',
  'ic-autoscroll-off',
  'ic-bar-graph-variable-1',
  'ic-bar-graph-variable-2',
  'ic-bell',
  'ic-bezier',
  'ic-biz-attribute-disable',
  'ic-biz-attribute',
  'ic-blocks',
  'ic-book-address',
  'ic-book-open-details',
  'ic-break',
  'ic-briefcase',
  'ic-budget',
  'ic-bug',
  'ic-calculator',
  'ic-calendar-day',
  'ic-calendar-generic',
  'ic-calendar-media-voice',
  'ic-calendar-month-highlight',
  'ic-calendar-month',
  'ic-camera',
  'ic-campaign-disable',
  'ic-campaign-done',
  'ic-campaign-schedule',
  'ic-campaign-stop',
  'ic-campaign',
  'ic-cart',
  'ic-cells',
  'ic-certificate',
  'ic-chat-add',
  'ic-chat-disable',
  'ic-chat-edit-disable',
  'ic-chat-edit',
  'ic-chat-end',
  'ic-chat-forward',
  'ic-chat-frown',
  'ic-chat-multi',
  'ic-chat-oval-close',
  'ic-chat-oval-multi',
  'ic-chat-oval-transfer',
  'ic-chat-oval',
  'ic-chat-smile',
  'ic-chat-video',
  'ic-chat',
  'ic-checkbox-tick-lock',
  'ic-checkbox-tick',
  'ic-checkbox',
  'ic-checklist-tick-lock',
  'ic-checkmark-bold',
  'ic-chevron-left',
  'ic-chevron-right',
  'ic-chevron-small-collapse-all',
  'ic-chevron-small-expand-all',
  'ic-chevron-small-left',
  'ic-chevron-small-right',
  'ic-circle-add',
  'ic-circle-arrow-down',
  'ic-circle-arrow-left',
  'ic-circle-arrow-right',
  'ic-circle-arrow-up',
  'ic-circle-close',
  'ic-circle-expand-down',
  'ic-circle-expand-left',
  'ic-circle-expand-right',
  'ic-circle-expand-up',
  'ic-cleanup',
  'ic-clip-approve',
  'ic-clip-exchange',
  'ic-clip-list',
  'ic-clipboard',
  'ic-clock-b',
  'ic-clock-stopwatch',
  'ic-clock-timezone',
  'ic-clock',
  'ic-clone',
  'ic-close-bold',
  'ic-close',
  'ic-cloud-a',
  'ic-cloud-b',
  'ic-cm-96-cloud',
  'ic-cm-96-desktop',
  'ic-cm-96-network',
  'ic-cm-96-outbound',
  'ic-cm-96-server-add',
  'ic-cm-96-server',
  'ic-cm-96-tenant',
  'ic-cm-96-user',
  'ic-cm-96-voice',
  'ic-cobrowse-chat',
  'ic-cobrowse-disable',
  'ic-cobrowse-end',
  'ic-cobrowse',
  'ic-code',
  'ic-collapse',
  'ic-column-direction-active',
  'ic-column-direction',
  'ic-comment-corner',
  'ic-conference-all-channels',
  'ic-configuration-disable',
  'ic-configuration',
  'ic-contact-add',
  'ic-contact-assign',
  'ic-contact-delete',
  'ic-contact-id-fetch',
  'ic-contact-id',
  'ic-contact-switch',
  'ic-contract-a',
  'ic-contract-b',
  'ic-contract-c',
  'ic-contract-d',
  'ic-control-backward',
  'ic-control-forward',
  'ic-control-left',
  'ic-control-right',
  'ic-control-skip-left',
  'ic-control-skip-next',
  'ic-control-skip-previous',
  'ic-control-skip-right',
  'ic-control-stop',
  'ic-copy',
  'ic-credit-card',
  'ic-cs-mobile',
  'ic-cs-social',
  'ic-cs-web',
  'ic-currency-dollar-sign',
  'ic-cut',
  'ic-cx-24-flat-agent',
  'ic-cx-24-flat-avatar',
  'ic-cx-24-flat-cal',
  'ic-cx-24-flat-chat',
  'ic-cx-24-flat-cobrowse',
  'ic-cx-24-flat-consult',
  'ic-cx-24-flat-inbound',
  'ic-cx-24-flat-lock',
  'ic-cx-24-flat-mail',
  'ic-cx-24-flat-offer',
  'ic-cx-24-flat-outbound',
  'ic-cx-24-flat-pref',
  'ic-cx-24-flat-search',
  'ic-cx-24-flat-survey',
  'ic-cx-24-flat-vid',
  'ic-cx-24-flat-vm',
  'ic-dash',
  'ic-dashtab-dash',
  'ic-dashtab-settings',
  'ic-dashtab-xwidget',
  'ic-dialpad',
  'ic-disclosure-left',
  'ic-doc-add',
  'ic-doc-alert-b',
  'ic-doc-all-save',
  'ic-doc-all',
  'ic-doc-detail-add',
  'ic-doc-detail',
  'ic-doc-form-b',
  'ic-doc-forward',
  'ic-doc-generic-b',
  'ic-doc-generic',
  'ic-doc-list-b',
  'ic-doc-list',
  'ic-doc-no',
  'ic-doc-phone-call',
  'ic-doc-report-b',
  'ic-doc-save',
  'ic-doc-segmentation-b',
  'ic-doc-yes-b',
  'ic-doc-yes',
  'ic-document-scenario',
  'ic-double-down',
  'ic-double-up',
  'ic-download',
  'ic-drag-out',
  'ic-dropdown-arrow',
  'ic-email-delete',
  'ic-email-forward',
  'ic-email-move-to-folder',
  'ic-email-reply-all',
  'ic-email-reply',
  'ic-email-resend',
  'ic-email-send',
  'ic-email-transfer',
  'ic-email',
  'ic-enterprise-extension',
  'ic-error-bold',
  'ic-escalate-from',
  'ic-escalate-to',
  'ic-escalate',
  'ic-event-cluster-mini',
  'ic-event-cluster',
  'ic-exit-full-screen',
  'ic-expand-down',
  'ic-expand-left',
  'ic-expand-right',
  'ic-expand-up',
  'ic-expand',
  'ic-export',
  'ic-face-happy',
  'ic-face-neutral',
  'ic-face-sad',
  'ic-face-solid-happy',
  'ic-face-solid-sad',
  'ic-face-unknown',
  'ic-facebook-square',
  'ic-file-folder-drawer',
  'ic-files',
  'ic-film-broadcast',
  'ic-film',
  'ic-filter',
  'ic-finger-pointing',
  'ic-folder-add',
  'ic-folder-disabled',
  'ic-folder-media',
  'ic-folder-move',
  'ic-folder-open-in',
  'ic-folder-open-out',
  'ic-folder-open',
  'ic-folder-progress',
  'ic-folder',
  'ic-follow-disable',
  'ic-follow',
  'ic-font-bold',
  'ic-font-decrease',
  'ic-font-increase',
  'ic-font-italic',
  'ic-font-style',
  'ic-font-underline',
  'ic-full-screen',
  'ic-gear-add',
  'ic-gear-remove',
  'ic-generic-disable',
  'ic-generic-laptop',
  'ic-generic-mobile-phone',
  'ic-generic-pc',
  'ic-generic-tablet',
  'ic-generic',
  'ic-globe',
  'ic-google-plus-circle',
  'ic-grab-vertical',
  'ic-grab',
  'ic-graph-bar',
  'ic-graph-barline',
  'ic-graph-bubble',
  'ic-graph-chart',
  'ic-graph-column',
  'ic-graph-edit',
  'ic-graph-grid',
  'ic-graph-line',
  'ic-graph-spark',
  'ic-graph-stack',
  'ic-grip-horizontal',
  'ic-grip-vertical',
  'ic-group',
  'ic-help',
  'ic-home',
  'ic-host',
  'ic-hp',
  'ic-import',
  'ic-in-small',
  'ic-in',
  'ic-inbound',
  'ic-insert-block-left',
  'ic-insert-block-right',
  'ic-inspect-chat-disable',
  'ic-inspect-chat',
  'ic-inspect-disable',
  'ic-inspect-phone-disable',
  'ic-inspect-phone',
  'ic-inspect-star',
  'ic-inspect',
  'ic-ivr-disable',
  'ic-ivr',
  'ic-iw-24-line-help',
  'ic-iw-24-line-notification',
  'ic-iw-24-line-teamcommunicator',
  'ic-iw-24-line-voicemail',
  'ic-iw-active-circle-callback',
  'ic-iw-active-circle-campaign',
  'ic-iw-active-circle-chat-round',
  'ic-iw-active-circle-chat-square',
  'ic-iw-active-circle-doc',
  'ic-iw-active-circle-email',
  'ic-iw-active-circle-facebook',
  'ic-iw-active-circle-globe',
  'ic-iw-active-circle-media',
  'ic-iw-active-circle-phone-cancel',
  'ic-iw-active-circle-phone-conf-susp',
  'ic-iw-active-circle-phone-conf',
  'ic-iw-active-circle-phone-dial',
  'ic-iw-active-circle-phone-pause',
  'ic-iw-active-circle-phone-play',
  'ic-iw-active-circle-phone-susp',
  'ic-iw-active-circle-phone-voice',
  'ic-iw-active-circle-question',
  'ic-iw-active-circle-rss',
  'ic-iw-active-circle-twitter',
  'ic-iw-active-circle-voice-chat',
  'ic-iw-active-circle-voice',
  'ic-iw-active-square-view',
  'ic-iw-arrow-outline-in',
  'ic-iw-circle-no-add',
  'ic-iw-circle-no-chevron-down',
  'ic-iw-circle-no-chevron-up',
  'ic-iw-circle-yes-add',
  'ic-iw-circle-yes-chevron-down',
  'ic-iw-circle-yes-chevron-up',
  'ic-iw-control-circle-back',
  'ic-iw-control-circle-fwd',
  'ic-iw-control-circle-home',
  'ic-iw-control-circle-play',
  'ic-iw-control-circle-stop',
  'ic-iw-done-and-stop',
  'ic-iw-history',
  'ic-iw-in-progress',
  'ic-iw-inspect-email',
  'ic-iw-inspect-voice-cancel',
  'ic-iw-inspect-voice',
  'ic-iw-monitor-chat',
  'ic-iw-monitor-voice',
  'ic-iw-queue',
  'ic-iw-routing-point',
  'ic-iw-save-as',
  'ic-iw-save',
  'ic-iw-square-facebook-email',
  'ic-iw-square-facebook-no',
  'ic-iw-square-facebook-transfer',
  'ic-iw-square-facebook-workbin',
  'ic-iw-square-rss-transfer',
  'ic-iw-square-rss-workbin',
  'ic-iw-square-twitter-follow',
  'ic-iw-square-twitter-no',
  'ic-iw-square-twitter-transfer',
  'ic-iw-square-twitter-workbin',
  'ic-iw-video-suspend',
  'ic-iw-video-thumb-cancel',
  'ic-iw-video-thumb-show',
  'ic-iw-video-thumb-swap',
  'ic-iw-voice-inspect-cancel',
  'ic-iw-voice-inspect',
  'ic-key-dot-dashed',
  'ic-link',
  'ic-linkedin-square',
  'ic-linux',
  'ic-list-bullets',
  'ic-list-numbers',
  'ic-locked',
  'ic-login-checkmark',
  'ic-login-error',
  'ic-login-info',
  'ic-lunch',
  'ic-measure-growing',
  'ic-measure-point-in-time',
  'ic-measure-sliding',
  'ic-measure-today',
  'ic-menu-hamburger',
  'ic-merge',
  'ic-mini-close',
  'ic-minimize',
  'ic-moon-default',
  'ic-more',
  'ic-ms',
  'ic-multiples',
  'ic-network',
  'ic-note-add',
  'ic-note',
  'ic-notebook',
  'ic-number-sign',
  'ic-open-book',
  'ic-out-small',
  'ic-out',
  'ic-outbound',
  'ic-page-multi',
  'ic-page-search',
  'ic-page-single',
  'ic-palette',
  'ic-parameter-group',
  'ic-parameter',
  'ic-paste',
  'ic-pc-mobile-phone',
  'ic-pencil',
  'ic-people-chat',
  'ic-people',
  'ic-person',
  'ic-phone-add',
  'ic-phone-bell',
  'ic-phone-chat-media',
  'ic-phone-conference',
  'ic-phone-decline',
  'ic-phone-dial',
  'ic-phone-disabled',
  'ic-phone-forward',
  'ic-phone-hang-up',
  'ic-phone-hold',
  'ic-phone-incoming',
  'ic-phone-pause',
  'ic-phone-rec-pause',
  'ic-phone-rec-resume',
  'ic-phone-rec-stop',
  'ic-phone-rec',
  'ic-phone-voice-retrieve',
  'ic-phone-voice',
  'ic-phone',
  'ic-phones',
  'ic-picture',
  'ic-pie-chart',
  'ic-pin-alert',
  'ic-pin-check',
  'ic-pin-solid-add',
  'ic-pin-solid-remove',
  'ic-pin-solid',
  'ic-pin-text',
  'ic-pin-time',
  'ic-pin-zoom-in',
  'ic-pin-zoom-out',
  'ic-pin',
  'ic-pinned',
  'ic-pinterest-circle',
  'ic-play-list',
  'ic-pointing-in-hand',
  'ic-printer',
  'ic-progress-bar',
  'ic-quotes',
  'ic-radio-active',
  'ic-radio',
  'ic-rebuild',
  'ic-redo',
  'ic-refresh-with-feedback',
  'ic-refresh',
  'ic-reload',
  'ic-remember',
  'ic-reset',
  'ic-rewind-five-seconds',
  'ic-routing',
  'ic-rss-square',
  'ic-rss',
  'ic-screen-rec-pause',
  'ic-screen-rec-record',
  'ic-screen-rec-resume',
  'ic-screen-rec-stop',
  'ic-scrubber',
  'ic-search-next',
  'ic-search-previous',
  'ic-search',
  'ic-searched-term',
  'ic-secure',
  'ic-segmentation',
  'ic-select-no',
  'ic-select-yes',
  'ic-select',
  'ic-server-add',
  'ic-server',
  'ic-settings-gear',
  'ic-settings-gears',
  'ic-settings-sliders',
  'ic-share',
  'ic-sharethis',
  'ic-shrinkage',
  'ic-shuffle',
  'ic-site-disable',
  'ic-site',
  'ic-skills',
  'ic-slide-back',
  'ic-slide-fwd',
  'ic-small-checkmark',
  'ic-small-close',
  'ic-small-plus',
  'ic-sms-cancel',
  'ic-sms-message',
  'ic-sms-reply',
  'ic-sms-transfer',
  'ic-solaris',
  'ic-sort-left-right',
  'ic-sort-up-down',
  'ic-special-g-brandmark',
  'ic-stamp',
  'ic-star-edit',
  'ic-star-half',
  'ic-star-outline',
  'ic-stars-add',
  'ic-stars-lock',
  'ic-stars-remove',
  'ic-stars',
  'ic-status-aftercallwork',
  'ic-status-available-no',
  'ic-status-available-yes',
  'ic-status-bad',
  'ic-status-call-dialing',
  'ic-status-call-inbound',
  'ic-status-call-internal',
  'ic-status-call-outbound',
  'ic-status-call-ringing',
  'ic-status-chat',
  'ic-status-email',
  'ic-status-good',
  'ic-status-hook-off',
  'ic-status-hook-on',
  'ic-status-interaction',
  'ic-status-logged-off',
  'ic-status-logged-on',
  'ic-status-monitored-no',
  'ic-status-monitored-yes',
  'ic-status-onhold',
  'ic-status-queue-empty',
  'ic-status-queue-full',
  'ic-status-queue-part-full',
  'ic-status-ready-blocked',
  'ic-status-ready-no',
  'ic-status-ready-partial',
  'ic-status-ready-yes',
  'ic-status-unknown',
  'ic-sun-default',
  'ic-superviser-chat-cancel',
  'ic-supervisor-cancel',
  'ic-supervisor-chat',
  'ic-supervisor-voice-cancel',
  'ic-supervisor-voice',
  'ic-supervisor',
  'ic-swap',
  'ic-switch-disable',
  'ic-switch',
  'ic-symbol-man',
  'ic-symbol-woman',
  'ic-tag-stat-add',
  'ic-tag-stat-remove',
  'ic-tag',
  'ic-target',
  'ic-team-communicator-team-communicator',
  'ic-team-communicator',
  'ic-tenant-disable',
  'ic-tenant',
  'ic-text-centered',
  'ic-text-detail',
  'ic-text-generic',
  'ic-text-indent-left',
  'ic-text-indent-right',
  'ic-text-justify-center',
  'ic-text-justify-full',
  'ic-text-justify-left',
  'ic-text-justify-right',
  'ic-text-spelling',
  'ic-thumbs-down',
  'ic-thumbs-up',
  'ic-tick',
  'ic-timeline',
  'ic-toggle-off',
  'ic-toggle-on',
  'ic-toggle',
  'ic-training',
  'ic-transfer-all-channels',
  'ic-transfer-common',
  'ic-transfer',
  'ic-trash',
  'ic-tree-branch',
  'ic-twitter-square',
  'ic-twitter',
  'ic-undo',
  'ic-unlocked',
  'ic-unmerge',
  'ic-upload',
  'ic-video-add',
  'ic-video-disable',
  'ic-video-end',
  'ic-video-forward',
  'ic-video-pause',
  'ic-video-roster',
  'ic-video-voice',
  'ic-video',
  'ic-videocam-1-disable',
  'ic-videocam-1',
  'ic-videocam-2-disable',
  'ic-videocam-2',
  'ic-view-details-bottom',
  'ic-view-details-right',
  'ic-view-grid',
  'ic-view-list',
  'ic-view-lists',
  'ic-view-stacked',
  'ic-view-tree',
  'ic-voicemail',
  'ic-window-contract',
  'ic-window-expand',
  'ic-zoom-in',
  'ic-zoom-out',
  'image',
  'inbox-alpha',
  'input',
  'interaction-sound',
  'interactions-alpha',
  'interactions-off-alpha',
  'interactions',
  'italic',
  'justify-center',
  'justify-left',
  'justify-right',
  'layers',
  'link-broken',
  'linkedin-1',
  'list-square',
  'listbox',
  'logo-genesys',
  'magnifying-glass-minus',
  'magnifying-glass-plus',
  'magnifying-glass',
  'marker',
  'mic-off',
  'mic-talking',
  'mic',
  'minus-circle',
  'missed-call',
  'mixer',
  'monitor',
  'move-file',
  'multi-agent-lines',
  'notification-chat',
  'notification-email',
  'notification-phone',
  'notification-score-chat',
  'notification-score-email',
  'notification-score-phone',
  'numeric-spinner',
  'organization',
  'outbound-call',
  'paint-bucket',
  'paperclip',
  'pause-secure',
  'pause',
  'pc-group',
  'pc-user',
  'pencil-square',
  'person-circle',
  'phone-active-1',
  'phone-active-2',
  'phone-active-3',
  'phone-alpha',
  'phone-off-alpha',
  'phone-off',
  'phone-picker',
  'phone-ring-muted',
  'phone-ring',
  'pixel-unit',
  'play',
  'plus-circle',
  'plus',
  'pop-out',
  'preview',
  'progress-pie',
  'puzzle',
  'question-with-screen',
  'question',
  'radio-button',
  'repeat',
  'reset-view',
  'resize-handle',
  'robot-circle',
  'robot-head',
  'scissors',
  'screen-full',
  'screen-small',
  'screenshare',
  'scripter-inverse',
  'sign-out',
  'sitemap',
  'sms-message',
  'sort-numeric-asc',
  'star',
  'steal',
  'step-backward',
  'step-forward',
  'stop',
  'template',
  'text',
  'thumbtack-off',
  'thumbtack-on',
  'topleft',
  'topright',
  'trashcan',
  'triangle',
  'twitter-white-on-blue',
  'underline',
  'undo',
  'vert-container',
  'viber-icon',
  'video-alpha',
  'video-off-alpha',
  'video-off',
  'volume-off-alt',
  'volume-off',
  'warning',
  'whistle',
  'wrap-up-code'
];

const svgHTMLCache = new Map();
async function fetchIcon(iconName) {
  const iconResponse = await fetch(index.getAssetPath(`./icons/${iconName}.svg`));
  if (iconResponse.status === 200) {
    return iconResponse.text();
  }
  throw new Error(`[gux-icon] fetching failed for icon "${iconName}" with status "${iconResponse.statusText} (${iconResponse.status})".`);
}
function iconInfoToId(iconName) {
  return iconName.replace('/', '-');
}
function getRootIconName(iconName) {
  if (iconNameMap[iconName]) {
    return iconNameMap[iconName];
  }
  if (legacyIconNames.includes(iconName)) {
    return `legacy/${iconName}`;
  }
  return iconName;
}
async function getBaseSvgHtml(iconName) {
  const id = iconInfoToId(iconName);
  const cachedSvgElement = await svgHTMLCache.get(id);
  if (cachedSvgElement) {
    return cachedSvgElement;
  }
  const svgHtml = fetchIcon(iconName)
    .then(svgText => svgText)
    .catch(err => {
    setTimeout(() => {
      throw err;
    }, 0);
    return getBaseSvgHtml('unknown');
  });
  svgHTMLCache.set(id, svgHtml);
  return svgHtml;
}
function validateProps(decorative, screenreaderText) {
  if (!decorative && !screenreaderText) {
    logError.logError('gux-icon', 'No screenreader-text provided. Either provide a localized screenreader-text property or set `decorative` to true.');
  }
}

const guxIconCss = ":host{display:inline-flex;width:1em;height:1em}.gux-icon-container{display:flex;align-items:center;justify-content:center;width:100%}.gux-icon-container svg{width:100%;max-width:100%;height:100%;max-height:100%;fill:currentcolor}";

const GuxIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.iconName = undefined;
    this.decorative = false;
    this.screenreaderText = '';
    this.svgHtml = undefined;
  }
  async prepIcon(iconName) {
    if (iconName) {
      const rootIconName = getRootIconName(iconName);
      this.baseSvgHtml = await getBaseSvgHtml(rootIconName);
      this.svgHtml = this.getSvgWithAriaAttributes(this.baseSvgHtml);
    }
  }
  watchDecorative(decorative) {
    this.validateProps(decorative, this.screenreaderText);
    this.svgHtml = this.getSvgWithAriaAttributes(this.baseSvgHtml);
  }
  watchScreenreaderText(screenreaderText) {
    this.validateProps(this.decorative, screenreaderText);
    this.svgHtml = this.getSvgWithAriaAttributes(this.baseSvgHtml);
  }
  async componentWillLoad() {
    usage.trackComponent(this.root, { variant: getRootIconName(this.iconName) });
    await this.prepIcon(this.iconName);
  }
  componentDidLoad() {
    this.validateProps(this.decorative, this.screenreaderText);
  }
  validateProps(decorative, screenreaderText) {
    // skip validation if root is not attached to DOM
    if (!this.root.isConnected) {
      return;
    }
    validateProps(decorative, screenreaderText);
  }
  getSvgWithAriaAttributes(svgText) {
    const svgElement = new DOMParser().parseFromString(svgText, 'image/svg+xml')
      .firstChild;
    if (this.decorative) {
      svgElement.setAttribute('aria-hidden', String(this.decorative));
    }
    else {
      svgElement.setAttribute('aria-hidden', 'false');
    }
    if (this.screenreaderText) {
      svgElement.setAttribute('aria-label', this.screenreaderText);
    }
    else {
      svgElement.removeAttribute('aria-label');
    }
    return svgElement.outerHTML;
  }
  render() {
    return (this.svgHtml && (index.h("div", { class: "gux-icon-container", innerHTML: this.svgHtml })));
  }
  static get assetsDirs() { return ["icons"]; }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "iconName": ["prepIcon"],
    "decorative": ["watchDecorative"],
    "screenreaderText": ["watchScreenreaderText"]
  }; }
};
GuxIcon.style = guxIconCss;

exports.gux_icon = GuxIcon;
