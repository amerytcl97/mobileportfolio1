import { View } from "react-native";
import Svg, { G, Path, Rect } from "react-native-svg";
import { ISvgProps } from "../types";

const EmptyBox = (props: ISvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={406}
      height={306}
      viewBox="0 0 400 300"
      {...props}
    >
      <G data-name="#296_empty_inbox_outline">
        <Path
          fill="#093f68"
          d="m287.57 149.09-32.58-44a7.2 7.2 0 0 0-5.8-2.92h-98.38a7.2 7.2 0 0 0-5.8 2.92l-32.58 44v53.62a11 11 0 0 0 11 11h153.16a11 11 0 0 0 11-11Z"
        />
        <Path
          fill="#093f68"
          d="M276.59 214.69H123.41a12 12 0 0 1-12-12v-53.6a1 1 0 0 1 .19-.6l32.58-44a8.26 8.26 0 0 1 6.61-3.33h98.38a8.26 8.26 0 0 1 6.61 3.33l32.58 44a1 1 0 0 1 .19.6v53.62a12 12 0 0 1-11.96 11.98Zm-163.16-65.27v53.29a10 10 0 0 0 10 10h153.16a10 10 0 0 0 10-10v-53.29l-32.38-43.75a6.25 6.25 0 0 0-5-2.52h-98.4a6.25 6.25 0 0 0-5 2.52Z"
        />
        <Path
          fill="#e4564a"
          d="M287.57 149.09v53.62a11 11 0 0 1-11 11H123.41a11 11 0 0 1-11-11v-53.62h47.41l4.46 22a8.75 8.75 0 0 0 8.58 7h54.84a8.78 8.78 0 0 0 8.62-7.15l4.12-21.91Z"
        />
        <Path
          fill="#093f68"
          d="M276.58 214.69H123.41a12 12 0 0 1-12-12v-53.6a1 1 0 0 1 1-1h47.41a1 1 0 0 1 1 .8l4.46 22a7.77 7.77 0 0 0 7.6 6.23h54.84a7.77 7.77 0 0 0 7.63-6.34l4.12-21.91a1 1 0 0 1 1-.81h47.11a1 1 0 0 1 1 1v53.62a12 12 0 0 1-12 12.01Zm-163.15-64.6v52.62a10 10 0 0 0 10 10h153.15a10 10 0 0 0 10-10v-52.62h-45.29l-4 21.09a9.78 9.78 0 0 1-9.6 8h-54.81a9.77 9.77 0 0 1-9.56-7.83L159 150.09Z"
        />
        <Path
          fill="#093f68"
          d="M150.9 191.86h-19.64a1 1 0 0 1 0-2h19.64a1 1 0 0 1 0 2Z"
        />
        <Path
          fill="#dfeaef"
          d="M164.5 89a2 2 0 0 1-1.59-.8l-13.61-18a2 2 0 0 1 3.2-2.41l13.6 18a2 2 0 0 1-.39 2.8 2 2 0 0 1-1.21.41ZM228.94 89a2.05 2.05 0 0 1-1.21-.41 2 2 0 0 1-.39-2.8l13.61-18a2 2 0 0 1 3.19 2.41l-13.6 18a2 2 0 0 1-1.6.8ZM198.29 83a2 2 0 0 1-2-2V56.15a2 2 0 0 1 4 0V81a2 2 0 0 1-2 2Z"
        />
        <Rect
          width={65.37}
          height={34.09}
          x={231.96}
          y={184.22}
          fill="#ffbc0e"
          rx={3.89}
        />
        <Path
          fill="#093f68"
          d="M293.44 219.32h-57.59a4.9 4.9 0 0 1-4.89-4.89v-26.32a4.9 4.9 0 0 1 4.89-4.89h57.59a4.9 4.9 0 0 1 4.89 4.89v26.32a4.9 4.9 0 0 1-4.89 4.89Zm-57.59-34.1a2.89 2.89 0 0 0-2.89 2.89v26.32a2.89 2.89 0 0 0 2.89 2.89h57.59a2.9 2.9 0 0 0 2.89-2.89v-26.32a2.9 2.9 0 0 0-2.89-2.89Z"
        />
        <Path
          fill="#093f68"
          d="M241.81 194.5h7.66v2.3h-5.18v2.1h4.89v2.29h-4.89v2.3h5.46v2.29h-7.94ZM251.44 198h2.3v1.05a1.59 1.59 0 0 1 .32-.44 2 2 0 0 1 .49-.4 3 3 0 0 1 .65-.29 2.92 2.92 0 0 1 .8-.11 3.06 3.06 0 0 1 1.44.33 2.15 2.15 0 0 1 .95 1.06 2.55 2.55 0 0 1 1-1.07 3.46 3.46 0 0 1 2.77-.06 2.27 2.27 0 0 1 .84.72 3 3 0 0 1 .45 1.07 6 6 0 0 1 .13 1.31v4.57h-2.39v-4.51a1.83 1.83 0 0 0-.23-.93.87.87 0 0 0-.82-.39 1.54 1.54 0 0 0-.69.14 1.1 1.1 0 0 0-.45.37 1.67 1.67 0 0 0-.24.56 2.87 2.87 0 0 0-.07.67v4.09h-2.39v-4.6a1.94 1.94 0 0 0-.12-.58 1 1 0 0 0-.31-.46 1 1 0 0 0-.63-.19 1.47 1.47 0 0 0-.74.17 1.1 1.1 0 0 0-.44.44 1.86 1.86 0 0 0-.2.63 5.87 5.87 0 0 0 0 .74v3.85h-2.39ZM265.52 198h2.2v1a2.4 2.4 0 0 1 .38-.42 2.2 2.2 0 0 1 .54-.39 3.66 3.66 0 0 1 .67-.29 2.9 2.9 0 0 1 .79-.11 4.13 4.13 0 0 1 1.56.29 3.74 3.74 0 0 1 1.2.83 3.79 3.79 0 0 1 .77 1.27 4.61 4.61 0 0 1 .27 1.61 5 5 0 0 1-.24 1.55 4.25 4.25 0 0 1-.71 1.31 3.36 3.36 0 0 1-1.1.92 3.13 3.13 0 0 1-1.48.34 4 4 0 0 1-1.4-.23 2.18 2.18 0 0 1-1.06-.79v4.46h-2.39Zm2.2 3.87a2 2 0 0 0 .5 1.42 1.85 1.85 0 0 0 1.41.54 1.82 1.82 0 0 0 1.41-.54 2.27 2.27 0 0 0 0-2.84 1.82 1.82 0 0 0-1.41-.54 1.85 1.85 0 0 0-1.41.54 2 2 0 0 0-.5 1.46ZM280.61 200h-2.11v2.58a3.45 3.45 0 0 0 0 .58 1.08 1.08 0 0 0 .14.46.76.76 0 0 0 .34.29 1.48 1.48 0 0 0 .61.11h.51a.88.88 0 0 0 .47-.19v2a3.44 3.44 0 0 1-.83.19 6.15 6.15 0 0 1-.85.05 4.33 4.33 0 0 1-1.11-.13 2.5 2.5 0 0 1-.89-.4 1.86 1.86 0 0 1-.6-.73 2.47 2.47 0 0 1-.22-1.08V200h-1.53v-2h1.53v-2.29h2.39V198h2.11ZM286.28 207c-.16.41-.32.78-.47 1.1a2.35 2.35 0 0 1-.56.8 2.19 2.19 0 0 1-.87.5 4.75 4.75 0 0 1-1.38.16 5.63 5.63 0 0 1-1.79-.28l.32-2a2.71 2.71 0 0 0 1.11.24 2 2 0 0 0 .66-.09 1 1 0 0 0 .42-.26 1.5 1.5 0 0 0 .28-.4l.24-.56.17-.45L281 198h2.58l2 5.11 1.71-5.11h2.45Z"
        />
      </G>
    </Svg>
  );
};

export default EmptyBox;
