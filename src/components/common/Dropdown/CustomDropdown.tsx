"use client";
import { Dropdown } from "react-bootstrap";
import "./CustomDropdown.scss";

function CustomDropdown({
  children,
  addclass,
  onSelect,
  onChange,
  defaultValue,
  defaultsel,
  align,
}: any) {
  return (
    <Dropdown
      className={`commonDropdown_style ${addclass}`}
      onSelect={onSelect}
      onChange={onChange}
      defaultValue={defaultValue}
      align={align}
    >
      <Dropdown.Toggle id="dropdown-basic" className="commonToggle_style">
        {defaultsel}
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
