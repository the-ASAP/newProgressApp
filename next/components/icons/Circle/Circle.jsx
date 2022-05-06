import React from 'react';

const Circle = ({ width, height }) => {
  return (
    <svg
      // width={width || '1rem'}
      // height={height || '1rem'}
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={538.409}
        cy={539.694}
        r={111.868}
        stroke="#fff"
        strokeOpacity={0.16}
        strokeWidth={90}
      />
      <circle
        cx={538.409}
        cy={539.694}
        r={111.868}
        stroke="url(#a)"
        strokeOpacity={0.16}
        strokeWidth={90}
      />
      <circle
        cx={538.409}
        cy={539.694}
        r={288.405}
        stroke="#fff"
        strokeOpacity={0.16}
        strokeWidth={90}
      />
      <g opacity={0.7}>
        <mask
          id="b"
          style={{
            maskType: 'alpha'
          }}
          maskUnits="userSpaceOnUse"
          x={205}
          y={206}
          width={667}
          height={668}
        >
          <path
            d="M826.814 539.694c0 159.282-129.123 288.405-288.405 288.405-159.282 0-288.405-129.123-288.405-288.405 0-159.282 129.123-288.405 288.405-288.405 159.282 0 288.405 129.123 288.405 288.405Z"
            stroke="#fff"
            strokeWidth={90}
          />
        </mask>
        <g mask="url(#b)">
          <path
            transform="rotate(-.05 464.052 745.561)"
            fill="url(#c)"
            d="M464.052 745.561h75.065v194.482h-75.065z"
          />
        </g>
      </g>
      <circle
        cx={538.889}
        cy={539.214}
        r={493.245}
        stroke="#fff"
        strokeOpacity={0.16}
        strokeWidth={90}
      />
      <g opacity={0.7}>
        <mask
          id="d"
          style={{
            maskType: 'alpha'
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={1078}
          height={1078}
        >
          <circle cx={538.889} cy={539.214} r={493.245} stroke="#fff" strokeWidth={90} />
        </mask>
        <g mask="url(#d)">
          <path
            transform="rotate(-.05 464.052 882.759)"
            fill="url(#e)"
            d="M464.052 882.759h75.065v194.482h-75.065z"
          />
        </g>
      </g>
      <g opacity={0.7}>
        <mask
          id="g"
          style={{
            maskType: 'alpha'
          }}
          maskUnits="userSpaceOnUse"
          x={381}
          y={382}
          width={315}
          height={315}
        >
          <circle cx={538.409} cy={539.694} r={111.868} stroke="url(#f)" strokeWidth={90} />
        </mask>
        <g mask="url(#g)">
          <path
            transform="rotate(-.05 463.737 502.103)"
            fill="url(#h)"
            d="M463.737 502.103h75.065v194.482h-75.065z"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={487.559}
          y1={637.556}
          x2={583.503}
          y2={638.516}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={464.053}
          y1={831.132}
          x2={539.117}
          y2={831.132}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={464.052}
          y1={968.331}
          x2={539.117}
          y2={968.331}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={487.559}
          y1={637.556}
          x2={583.503}
          y2={638.516}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="h"
          x1={463.737}
          y1={587.675}
          x2={538.802}
          y2={587.675}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Circle;
