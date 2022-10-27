import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CourseLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          borderBottom: match ? "2px solid white" : "none",
          color: match ? "yellow" : "white",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CourseLink;
