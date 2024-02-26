export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-16 w-16 bg-indigo-300 rounded-lg py-2 text-center"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="inline-block h-16 w-16 bg-indigo-600 text-center rounded-lg py-2">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              color: "white",
              verticalAlign: "top",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="inline-block h-16 w-16 text-gray-300">
          <Content
            style={{
              display: "inline-block",
              width: "100%",
              height: "100%",
              color: "#d1d5db",
              verticalAlign: "top",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return (
    <div onClick={flip} className={className}>
      
    </div>
  );
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
