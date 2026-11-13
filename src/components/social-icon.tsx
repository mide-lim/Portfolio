type IconName = "linkedin" | "github" | "gmail" | "discord";
export function SocialIcon({ name }: { name: IconName }) {
  return (
    <svg
      className="social-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {name === "linkedin" && (
        <>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 10v7m0-10v.1M12 17v-7m0 3c0-4 5-4 5 0v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
      {name === "github" && (
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.1.4-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.54 9.54 0 0 1 12 6.82c.85 0 1.7.12 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.41.1 2.66.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86V21c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      )}
      {name === "gmail" && (
        <>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m4 7 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </>
      )}
      {name === "discord" && (
        <>
          <path
            d="M7 6c3-1 7-1 10 0 2 3 3 6 3 10-1.5 1.2-2.8 1.8-4.4 2.1l-.7-1.2c-2 .5-3.8.5-5.8 0l-.7 1.2C6.8 17.8 5.5 17.2 4 16c0-4 1-7 3-10Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="12" r="1.2" fill="currentColor" />
          <circle cx="15" cy="12" r="1.2" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
