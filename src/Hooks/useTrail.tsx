import { useTrail, a } from "@react-spring/web";
import React from "react";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 1000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 160 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
    return (
      <div className="overflow-hidden">
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };

export default Trail;