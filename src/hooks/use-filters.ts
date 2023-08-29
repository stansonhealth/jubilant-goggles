import {useEffect, useState} from "react";

export function useFilters() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://api.themembers.com").then((result) => {
      setMembers(result.body)
    })
  }, []);

  return {
    filterA: {
      name: "members",
      type: "select",
      state: "loading",
      values: members
    },
    filterB: {
      name: "name",
      type: "freetext",
      state: "ready",
      value: ""
    }
  }
}