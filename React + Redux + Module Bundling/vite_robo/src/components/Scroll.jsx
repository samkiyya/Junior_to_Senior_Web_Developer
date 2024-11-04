const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "800px",
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For Internet Explorer and Edge
      }}
    >
      <style>
        {`
          /* For WebKit browsers (Chrome, Safari) */
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="scroll-container">{children}</div>
    </div>
  );
};

export default Scroll;
