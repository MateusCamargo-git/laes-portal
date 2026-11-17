import React from 'react';
const lion=<><path className="lb-emblem-fill" d="m24 12 7 4 4-1-1 6 5 4-3 6 1 6-7 2-6 6-6-6-7-2 1-6-3-6 5-4-1-6 4 1z"/><path className="lb-emblem-cut" d="m16 23 5-3 3 2 3-2 5 3-2 9-6 7-6-7z"/><path d="m17 25 4 2m10-2-4 2m-5 4h4l-2 3zM24 34v3m-3 0 3 1 3-1"/></>;
const crown=<path className="lb-emblem-fill" d="m14 13 5 4 5-8 5 8 5-4-2 10H16z"/>;
const art={
 beta:<><g transform="translate(2 1) scale(.92)">{lion}</g><path className="lb-emblem-fill" d="m24 4 1.6 3.2 3.5.5-2.6 2.5.6 3.5-3.1-1.6-3.1 1.6.6-3.5-2.6-2.5 3.5-.5z"/><path className="lb-fine" d="m8 13 3 2M6 20l4 1m30-8-3 2m5 5-4 1"/></>,
 team:<><path className="lb-emblem-fill" d="m8 17 10-4 6 7-7 7-9-3zm32 0-10-4-6 7 7 7 9-3zM17 29l7-6 7 6-2 10-5 4-5-4z"/><path d="m10 28 5 10m23-10-5 10M24 10v5"/><path className="lb-fine" d="m13 19 4-1m18 1-4-1m-7 12v7"/></>,
 captain:<><g transform="translate(6 11) scale(.75)">{lion}</g>{crown}<path d="M16 25h16"/><path className="lb-fine" d="m9 32 3 1m27-1-3 1"/></>,
 debut:<><path className="lb-fine" d="M9 34c0-6 7-10 15-10s15 4 15 10M7 36c0 6 8 10 17 10s17-4 17-10"/><path className="lb-emblem-fill" d="m32 9 5-1-1 6-13 15-5-4z"/><path d="m15 23 10 10m-5-5-8 9m-2-2 5 5"/><path className="lb-fine" d="m23 24 10-12M13 42h5m12 0h5"/></>,
 warrior:<><path className="lb-emblem-fill" d="m9 12 6 2 14 18-4 4-14-18zm30 0-6 2-14 18 4 4 14-18z"/><path d="m23 35 8-7m-6 10 8 7m-16-17 8 7m-2 3-8 7"/><path className="lb-emblem-fill" d="M25 15c5 7-1 8 3 12l3-4c6 8 2 15-7 15-8 0-12-8-6-14l2 4c-1-6 4-8 5-13z"/><path className="lb-emblem-cut" d="M24 28c-5 6-4 8 0 9 4-1 5-4 0-9z"/></>,
 champion:<><path d="M15 18H9v5c0 5 4 8 8 8m16-13h6v5c0 5-4 8-8 8"/><path className="lb-emblem-fill" d="M15 16h18v10c0 6-4 10-9 10s-9-4-9-10z"/><path className="lb-emblem-cut" d="m24 20 2 4 4 .5-3 3 .8 4-3.8-2-3.8 2 .8-4-3-3 4-.5z"/><path d="M24 36v7m-7 0h14"/><g transform="translate(6 0) scale(.75)">{crown}</g></>,
 streamer:<><path className="lb-emblem-fill" d="M11 20h20v17H11zM32 25l7-5v17l-7-5z"/><path className="lb-emblem-cut" d="m18 24 8 5-8 5z"/><path d="M14 16c4-5 12-5 16 0m-19-4c6-7 16-7 22 0M17 41h9m-5-4v4"/><circle className="lb-stream-dot" cx="29" cy="21" r="2.5"/></>
};
const small={
 beta:<><path className="lb-emblem-fill" d="m24 12 9 5 4 9-4 11-9 7-9-7-4-11 4-9z"/><path className="lb-emblem-cut" d="m17 23 7 4 7-4-2 12-5 4-5-4z"/><path d="m21 31 3 2 3-2"/><path className="lb-emblem-fill" d="m24 5 2 4 4 1-3 3 .5 4-3.5-2-3.5 2 .5-4-3-3 4-1z"/></>,
 team:<><path className="lb-emblem-fill" d="m9 18 10-4 5 7-8 8-7-4zm30 0-10-4-5 7 8 8 7-4zM17 31l7-7 7 7-3 10-4 3-4-3z"/></>,
 captain:<>{crown}<path d="M16 26h16"/><path className="lb-emblem-fill" d="m16 29 8-3 8 3-2 10-6 5-6-5z"/><path className="lb-emblem-cut" d="m20 32 4 2 4-2-4 7z"/></>,
 debut:<><path className="lb-emblem-fill" d="m32 9 6-1-1 6-15 17-5-5z"/><path d="m14 23 11 11m-5-6-9 11M8 37l6 6M11 44h26"/></>,
 warrior:<><path d="m11 13 26 30M37 13 11 43"/><path className="lb-emblem-fill" d="M25 13c6 8-1 10 4 14l3-5c7 12 1 19-8 19-10 0-14-10-7-18l3 6c-1-7 4-11 5-16z"/><path className="lb-emblem-cut" d="M24 29c-4 5-4 9 0 10 5-1 5-5 0-10z"/></>,
 champion:<><path className="lb-emblem-fill" d="M15 13h18v14c0 6-4 9-9 9s-9-3-9-9z"/><path d="M14 17H9v7c0 5 4 7 7 7m18-14h5v7c0 5-4 7-7 7M24 36v7m-7 0h14"/><path className="lb-emblem-cut" d="m24 18 2 4 4 1-3 3 .5 4-3.5-2-3.5 2 .5-4-3-3 4-1z"/></>,
 streamer:<><path className="lb-emblem-fill" d="M9 21h23v17H9zm24 4 7-5v19l-7-6z"/><path className="lb-emblem-cut" d="m17 25 8 5-8 5z"/><path d="M13 16c4-5 12-5 16 0m-19-5c6-7 16-7 22 0"/></>
};
export function BadgeIcon({badge,locked=false,compact=false}){
 const id='laes-badge-'+React.useId().replace(/:/g,'');
 return <svg className={`lb-icon lb-${badge.color}${locked?' lb-locked':''}${compact?' lb-mini':' lb-detailed'}`} viewBox="0 0 64 76" fill="none" aria-hidden="true" focusable="false" data-badge={badge.id} data-detail={compact?'compact':'detailed'}><defs><linearGradient id={id+'-rim'} x1="8" y1="4" x2="52" y2="70" gradientUnits="userSpaceOnUse"><stop stopColor="var(--lb-bright)"/><stop offset=".23" stopColor="var(--lb-main)"/><stop offset=".5" stopColor="var(--lb-bright)"/><stop offset=".7" stopColor="var(--lb-main)"/><stop offset="1" stopColor="var(--lb-bright)"/></linearGradient><linearGradient id={id+'-face'} x1="15" y1="12" x2="49" y2="64" gradientUnits="userSpaceOnUse"><stop stopColor="var(--lb-face-light)"/><stop offset="1" stopColor="var(--lb-bg)"/></linearGradient></defs>
 <path d="M32 2 58 12v24c0 16-14 27-26 37C20 63 6 52 6 36V12z" fill={compact?'var(--lb-main)':`url(#${id}-rim)`}/><path d="M32 7 53 15v21c0 13-11 23-21 31-10-8-21-18-21-31V15z" fill={`url(#${id}-face)`} stroke="var(--lb-rim-shadow)" strokeWidth="1.5"/>
 {!compact&&<><path d="M32 11 49 17v19c0 11-9 20-17 27-8-7-17-16-17-27V17z" stroke="var(--lb-main)" strokeWidth=".65"/><path d="m12 17 20-7 19 7M32 67v5" stroke="var(--lb-bright)" strokeWidth=".8" opacity=".75"/><path d="M17 20v17l15 23 15-23V20L32 14z" fill="var(--lb-main)" opacity=".06"/><path className="lb-etch" d="m13 20 36 32m-36-23 30 28m-27-14 17 18"/><path d="m10 14 3 1m38 0 3-1M20 61l2-2m20 2-2-2" stroke="var(--lb-bright)" strokeWidth="1"/></>}
 <g transform="translate(8 10)" className="lb-art" strokeWidth={compact?2.3:1.7} strokeLinecap="round" strokeLinejoin="round">{compact?small[badge.id]:art[badge.id]}</g>
 {!compact&&<g className="lb-laurels" stroke="var(--lb-main)" strokeWidth="1" fill="none"><path d="M17 49c2 7 7 12 15 15m15-15c-2 7-7 12-15 15"/><path d="m19 53-4-1 2 4 4 1m2 0-4 1 3 3 4-1m19-7 4-1-2 4-4 1m-2 0 4 1-3 3-4-1"/></g>}
 </svg>;
}
