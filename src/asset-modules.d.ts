declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.PNG' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.WEBP' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.SVG' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.pdf' {
  const src: string;
  export default src;
}

declare module '*.PDF' {
  const src: string;
  export default src;
}

declare module '*?as=picture' {
  const picture: {
    sources?: Array<{ type: string; srcset: string }>;
    img: { src: string; width?: number; height?: number; w?: number; h?: number };
  };
  export default picture;
}

declare module '*&as=picture' {
  const picture: {
    sources?: Array<{ type: string; srcset: string }>;
    img: { src: string; width?: number; height?: number; w?: number; h?: number };
  };
  export default picture;
}

