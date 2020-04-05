import React from "react";
import { Link } from "../components/atoms/Link";

export const InlineLink = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis{" "}
      <Link href="" onClick={(e) => e.preventDefault()}>
        aute irure dolor in
      </Link>{" "}
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint{" "}
      <Link href="" onClick={(e) => e.preventDefault()}>
        occaecat cupidatat
      </Link>{" "}
      non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </p>
    <p>
      Labore et{" "}
      <Link href="" onClick={(e) => e.preventDefault()}>
        dolore
      </Link>{" "}
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in{" "}
      <Link href="" onClick={(e) => e.preventDefault()}>
        voluptate velit esse cillum dolore eu fugiat
      </Link>{" "}
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit{" "}
      <Link href="" onClick={(e) => e.preventDefault()}>
        anim id est laborum.
      </Link>
    </p>
  </>
);

export default {
  title: "Link",
};
