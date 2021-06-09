import React, { useState } from 'react'
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

export default function ListingsDisplayDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown>
      <DropdownToggle caret>
        Sort By
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Date</DropdownItem>
        <DropdownItem>x</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
