import React from "react";
import { TextField, InputAdornment, Avatar } from "@mui/material";
import { IoMdSearch } from "react-icons/io";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <TextField
        className={styles.searchBar}
        placeholder="Search..."
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IoMdSearch size={24} />
            </InputAdornment>
          ),
        }}
      />
      <div className={styles.profile}>
        <div>
          <p>jamesbrown@mifa.com</p>
          <p>Admin</p>
        </div>
        <Avatar
          alt="Remy Sharp"
          src="src/assets/avatar.jpg"
          sx={{ width: 45, height: 45 }}
        />
      </div>
    </div>
  );
}

export default Header;
