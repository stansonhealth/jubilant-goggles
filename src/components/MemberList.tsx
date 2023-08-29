import {useFilters} from "../hooks/use-filters";
import {detailedMember} from "./member-details";

interface MemberFilter {
  type: string;
  name: string;
  values: Array<{
    id: string;
    name: string;
    age: number;
    dobyear: number;
  }>;
}

export function MemberList() {
  const filters = useFilters();

  const getDobFromAge = () => {
    const memberFilter = filters.filterA as MemberFilter;
    memberFilter.values.map((member) => {
      const currentYear = new Date().getFullYear();
      const birthYear = currentYear - member.age;
      member.dobyear = birthYear;
      return member;
    })
  }

  getDobFromAge();

  return (
    <div>
      <div>members</div>
      <select>
        {
          filters.filterA.values.map((name) =>
            <option value={name.id}>{name.name} {name.dobyear}</option>
          )
        }
      </select>
      <div>All Available Members</div>
      {
        (filters.filterA as MemberFilter).values.map((val) =>
          <detailedMember name={val.name}></detailedMember>
        )
      }
    </div>
  )
}