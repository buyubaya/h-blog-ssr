import React from 'react';


class Logo extends React.Component {
    componentDidMount(){
        const svg = document.getElementById('avatar-svg');
        if(svg){
            const tags = ['path', 'circle', 'polygon', 'rect'];
            tags.forEach(tag => {
                let els = svg.getElementsByTagName(tag);
                if(els.length > 0){
                    for(let i=0, n=els.length; i<n; i++){
                        const len = els[i].getTotalLength();
                        els[i].style.strokeDasharray = len;
                        els[i].style.strokeDashoffset = len;
                        els[i].style.strokeWidth = 5;
                        els[i].style.stroke = '#39424e';
                        els[i].style.fillOpacity = 0;
                    }
                }
            });

            setTimeout(() => {
                tags.forEach(tag => {
                    let els = svg.getElementsByTagName(tag);
                    if(els.length > 0){
                        for(let i=0, n=els.length; i<n; i++){
                            const len = els[i].getTotalLength();
                            els[i].style.transition = 'fill-opacity 1s, stroke-dashoffset 2s';
                            els[i].style.strokeDashoffset = 0;
                            setTimeout(() => {
                                els[i].style.fillOpacity = 1;
                                const avatarWheel = document.getElementById('avatar-wheel');
                                const avatarCircle = document.getElementById('avatar-circle');
                                if(avatarWheel){
                                    avatarWheel.classList.add('is-active');
                                }
                                if(avatarCircle){
                                    avatarCircle.classList.add('is-active');
                                }
                            }, 2000);
                        }
                    }
                });    
            }, 0);
        }
    }

    render(){
        return(
<svg 
    id="avatar-svg"
	viewBox="0 0 512.001 512.001">
    <g id="avatar-wheel">
        <path style={{fill:"#FF5A5A"}} d="M379.15,130.365l18.107-5.851c4.517,3.658,9.614,6.627,15.132,8.75l3.987,18.611h32.252l3.987-18.611
        c5.518-2.122,10.614-5.092,15.132-8.75l18.107,5.851l16.147-27.921l-14.133-12.766c0.446-2.848,0.68-5.767,0.68-8.741
        s-0.234-5.892-0.68-8.741l14.133-12.765L485.853,31.51l-18.107,5.851c-4.517-3.658-9.614-6.627-15.132-8.75L448.627,10h-32.252
        l-3.987,18.611c-5.518,2.122-10.614,5.092-15.132,8.75l-18.107-5.851l-16.148,27.921l14.133,12.766
        c-0.446,2.848-0.68,5.767-0.68,8.741s0.234,5.892,0.68,8.741l-14.133,12.765L379.15,130.365z"/>
        <path d="M354.345,107.451l16.148,27.921c2.359,4.079,7.245,5.958,11.731,4.509l13.216-4.271c2.633,1.788,5.387,3.381,8.245,4.768
        l2.911,13.59c0.988,4.611,5.063,7.906,9.778,7.906h32.252c4.716,0,8.79-3.294,9.778-7.906l2.911-13.59
        c2.858-1.387,5.612-2.98,8.245-4.768l13.216,4.271c4.487,1.449,9.372-0.43,11.731-4.509l16.148-27.921
        c2.362-4.084,1.548-9.264-1.953-12.427l-10.327-9.328c0.113-1.585,0.171-3.174,0.171-4.758s-0.058-3.173-0.171-4.758l10.327-9.328
        c3.501-3.163,4.315-8.343,1.953-12.427l-16.148-27.921c-2.359-4.079-7.244-5.958-11.731-4.509l-13.216,4.271
        c-2.633-1.788-5.387-3.381-8.245-4.768l-2.911-13.59c-0.988-4.611-5.063-7.906-9.778-7.906h-32.252c-4.716,0-8.79,3.294-9.778,7.906
        l-2.911,13.59c-2.858,1.387-5.612,2.98-8.245,4.768l-13.216-4.271c-4.486-1.45-9.372,0.43-11.731,4.509l-16.148,27.921
        c-2.362,4.084-1.548,9.264,1.953,12.427l10.327,9.328c-0.113,1.585-0.171,3.174-0.171,4.758s0.058,3.173,0.171,4.758l-10.327,9.328
        C352.797,98.187,351.983,103.366,354.345,107.451z M387.014,88.13c-0.371-2.368-0.56-4.788-0.56-7.193s0.188-4.825,0.56-7.193
        c0.521-3.334-0.673-6.707-3.177-8.969l-8.129-7.342l8.054-13.924l10.42,3.368c3.218,1.04,6.741,0.384,9.368-1.744
        c3.758-3.043,7.939-5.461,12.429-7.188c3.153-1.213,5.48-3.936,6.188-7.239l2.293-10.705h16.082l2.293,10.705
        c0.708,3.303,3.035,6.026,6.188,7.239c4.489,1.727,8.671,4.145,12.429,7.188c2.627,2.127,6.15,2.782,9.368,1.744l10.42-3.368
        l8.054,13.924l-8.129,7.342c-2.504,2.262-3.698,5.635-3.177,8.969c0.371,2.368,0.56,4.788,0.56,7.193s-0.188,4.825-0.56,7.193
        c-0.521,3.334,0.673,6.707,3.177,8.969l8.129,7.342l-8.054,13.924l-10.42-3.368c-3.215-1.038-6.741-0.383-9.368,1.744
        c-3.758,3.043-7.939,5.461-12.429,7.188c-3.153,1.213-5.48,3.936-6.188,7.239l-2.293,10.705H424.46l-2.293-10.705
        c-0.708-3.303-3.035-6.026-6.188-7.239c-4.489-1.727-8.671-4.145-12.429-7.188c-2.627-2.128-6.153-2.784-9.368-1.744l-10.42,3.368
        l-8.054-13.924l8.129-7.342C386.341,94.837,387.536,91.464,387.014,88.13z"/>
    </g>    
    <path style={{fill:"#FFE6C3"}} d="M256.002,297.334L256.002,297.334c-43.757,0-79.229-35.472-79.229-79.229v-53.676
	c0-43.757,35.472-79.229,79.229-79.229l0,0c43.757,0,79.229,35.472,79.229,79.229v53.676
	C335.23,261.862,299.758,297.334,256.002,297.334z"/>
    <path style={{fill:"#F5B955"}} d="M335.23,178.141v-13.712c0-43.757-35.472-79.229-79.229-79.229l0,0
	c-43.757,0-79.229,35.472-79.229,79.229v19.439h28.731c25.443,0,49.02-13.355,62.101-35.178l0,0l15.775,15.495
	c12.844,12.615,30.127,19.684,48.13,19.684L335.23,178.141z"/>
    <path style={{fill:"#32C8AF"}} d="M447.958,502.001v-85.266c0-30.534-20.478-57.275-49.957-65.234l0,0h-284l0,0
	c-29.479,7.959-49.957,34.7-49.957,65.234v85.266H447.958z"/>
    <path style={{fill:"#AAE6FF"}} d="M347.502,318.001H164.501c-27.89,0-50.5,22.609-50.5,50.499v133.501h284V368.5
	C398.001,340.61,375.392,318.001,347.502,318.001z"/>
    <g id="avatar-circle">
        <circle style={{fill:"#FFFFFF"}} cx="256.001" cy="410" r="28"/>
        <path d="M256.001,372.001c-20.953,0-38,17.047-38,38s17.047,38,38,38s38-17.047,38-38S276.955,372.001,256.001,372.001z
        M256.001,428.001c-9.925,0-18-8.075-18-18s8.075-18,18-18s18,8.075,18,18S265.926,428.001,256.001,428.001z"/>
    </g>
    <path d="M256.001,307.335c49.201,0,89.229-40.028,89.229-89.229v-53.677c0-49.201-40.027-89.229-89.229-89.229
	s-89.229,40.028-89.229,89.229v53.677C166.773,267.307,206.8,307.335,256.001,307.335z M256.001,95.2
	c38.173,0,69.229,31.056,69.229,69.229v8.896c-13.63-1.758-26.271-7.855-36.228-17.635l-14.39-14.134
	c-2.187-2.147-5.232-3.172-8.276-2.785c-3.039,0.389-5.732,2.149-7.309,4.778c-11.211,18.702-31.72,30.32-53.524,30.32h-18.73
	v-9.439C186.773,126.256,217.829,95.2,256.001,95.2z M186.773,193.868h18.73c24.591,0,47.934-11.19,63.445-29.841l6.038,5.931
	c13.727,13.483,31.327,21.667,50.243,23.51v24.637c0,38.173-31.056,69.229-69.229,69.229s-69.229-31.056-69.229-69.229v-24.237
	H186.773z"/>
    <path d="M478.069,492.001h-20.11v-75.266c0-34.488-22.938-64.896-55.952-74.479c-9.791-20.252-30.543-34.255-54.504-34.255H164.5
	c-23.962,0-44.713,14.003-54.504,34.255c-33.014,9.583-55.952,39.991-55.952,74.479v75.266h-20.11c-5.522,0-10,4.477-10,10
	s4.478,10,10,10h444.135c5.522,0,10-4.477,10-10S483.591,492.001,478.069,492.001z M437.958,416.735v75.266h-29.957v-123.5
	c0-0.77-0.029-1.533-0.058-2.296C426.103,376.128,437.958,395.377,437.958,416.735z M74.044,416.735
	c0-21.358,11.856-40.607,30.015-50.531c-0.029,0.763-0.058,1.526-0.058,2.296V492H74.044V416.735z M164.008,492.001v-46.333
	c0-5.523-4.478-10-10-10s-10,4.477-10,10v46.333h-20.007v-123.5c0-22.332,18.168-40.5,40.499-40.5h183.002
	c22.331,0,40.499,18.168,40.499,40.5v123.5H164.008z"/>
    <g>
        <path id="tagLT" d="M28.853,74.136c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929c3.905-3.905,3.905-10.237,0-14.142
        L24.144,41.143l18.852-18.852c3.905-3.905,3.905-10.237,0-14.143c-3.906-3.904-10.236-3.904-14.143,0L2.93,34.071
        c-1.875,1.876-2.929,4.419-2.929,7.072s1.054,5.196,2.929,7.071L28.853,74.136z"/>
        <path id="tagGT" d="M122.256,74.136c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l25.922-25.922
        c3.905-3.905,3.905-10.236,0-14.142L136.399,8.149c-3.904-3.905-10.234-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142
        l18.852,18.852l-18.852,18.852C118.351,63.899,118.351,70.231,122.256,74.136z"/>
        <path id="tagBetween" d="M59.258,80.905c1.592,0.935,3.335,1.38,5.057,1.38c3.429,0,6.769-1.765,8.631-4.935l36.603-62.283
        c2.799-4.762,1.207-10.89-3.555-13.688c-4.762-2.797-10.89-1.206-13.688,3.555L55.704,67.217
        C52.905,71.979,54.497,78.107,59.258,80.905z"/>
    </g>
    <path d="M10.001,137.875h77.98c5.522,0,10-4.477,10-10s-4.478-10-10-10h-77.98c-5.522,0-10,4.477-10,10
	C0.001,133.398,4.479,137.875,10.001,137.875z"/>
    <path d="M122.393,137.875h24.155c5.522,0,10-4.477,10-10s-4.478-10-10-10h-24.155c-5.522,0-10,4.477-10,10
	C112.393,133.398,116.871,137.875,122.393,137.875z"/>
    <path d="M70.001,223.872c0-5.523-4.478-10-10-10h-50c-5.522,0-10,4.477-10,10s4.478,10,10,10h50
	C65.524,233.872,70.001,229.395,70.001,223.872z"/>
    <path d="M138.771,213.872H94.886c-5.522,0-10,4.477-10,10s4.478,10,10,10h43.885c5.522,0,10-4.477,10-10
	S144.293,213.872,138.771,213.872z"/>
        <path d="M10.001,185.873h12.961c5.522,0,10-4.477,10-10s-4.478-10-10-10H10.001c-5.522,0-10,4.477-10,10
	S4.479,185.873,10.001,185.873z"/>
    <path d="M138.771,165.873h-81.77c-5.522,0-10,4.477-10,10s4.478,10,10,10h81.77c5.522,0,10-4.477,10-10
	S144.293,165.873,138.771,165.873z"/>
    <path d="M502.001,307.991c-2.63,0-5.21,1.06-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07s1.069,5.21,2.93,7.07
	c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07c0-2.64-1.07-5.21-2.931-7.07
	C507.211,309.051,504.631,307.991,502.001,307.991z"/>
    <path d="M417.091,328.001h49.243c5.522,0,10-4.477,10-10s-4.478-10-10-10h-49.243c-5.522,0-10,4.477-10,10
	S411.569,328.001,417.091,328.001z"/>
    <path d="M413.268,269.996c0-5.523-4.478-10-10-10h-25.6c-5.522,0-10,4.477-10,10s4.478,10,10,10h25.6
	C408.791,279.996,413.268,275.519,413.268,269.996z"/>
    <path d="M512.001,269.996c0-5.523-4.478-10-10-10h-59.31c-5.522,0-10,4.477-10,10s4.478,10,10,10h59.31
	C507.524,279.996,512.001,275.519,512.001,269.996z"/>
    <path d="M432.501,90.941c2.63,0,5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07c0-2.64-1.07-5.21-2.931-7.07
	c-1.859-1.87-4.439-2.93-7.069-2.93s-5.21,1.06-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07c0,2.63,1.069,5.21,2.93,7.07
	S429.872,90.941,432.501,90.941z"/>
    <path d="M228.751,233.871c2.63,0,5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07
	c-1.859-1.86-4.439-2.93-7.069-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.069,5.21,2.93,7.07
	C223.541,232.801,226.122,233.871,228.751,233.871z"/>
    <path d="M283.251,233.871c2.63,0,5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07
	c-1.859-1.86-4.439-2.93-7.069-2.93c-2.641,0-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.069,5.21,2.93,7.07
	C278.041,232.801,280.622,233.871,283.251,233.871z"/>
    <path d="M153.992,400.001c-2.631,0-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.069,5.21,2.93,7.07s4.439,2.93,7.07,2.93
	c2.63,0,5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.43,2.931-7.07c0-2.63-1.07-5.21-2.931-7.07
	C159.202,401.071,156.631,400.001,153.992,400.001z"/>
</svg>
        );
    }
}


export default Logo;