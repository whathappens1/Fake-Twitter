/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import "./styles/header.css";
import { useTranslation } from "react-i18next";
import { useTheme, Button, Avatar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function header({ setMode }) {
  const { i18n } = useTranslation();
  const theme = useTheme();

  // desktop menu
  const inputElementDesk = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const renderMenu = (
    <Menu
      anchorEl={inputElementDesk.current}
      open={isMenuOpen}
      onClose={closeMenu}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <MenuItem onClick={closeMenu}>
        {i18n.language === "en" ? "My Account" : "حسابي"}
      </MenuItem>
      <MenuItem onClick={closeMenu}>
        {i18n.language === "en" ? "Settings" : "الإعدادات"}
      </MenuItem>
      <MenuItem onClick={closeMenu}>
        {i18n.language === "en" ? "Log Out" : "تسجيل خروج"}
      </MenuItem>
    </Menu>
  );

  // mobile menu
  const inputElementMobile = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenuMobile = () => {
    setIsMobileMenuOpen(false);
  };
  const renderMobileMenu = (
    <Menu
      anchorEl={inputElementMobile.current}
      open={isMobileMenuOpen}
      onClose={closeMenuMobile}
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>{i18n.language === "en" ? "Messages" : "الرسائل"}</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>{i18n.language === "en" ? "Notifications" : "الاشعارات"}</p>
      </MenuItem>
      <MenuItem onClick={closeMenuMobile}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p> {i18n.language === "en" ? "My Account" : "حسابي"}</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="sticky">
      {i18n.language === "en" && (
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Fake Twitter
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              sx={{ width: "37px", height: "37px" }}
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              sx={{ width: "37px", height: "37px", marginLeft: "15px" }}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              ref={inputElementDesk}
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                sx={{ width: "37px", height: "37px", marginLeft: "5px" }}
                src="./static/images/userImg.jpg"
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              ref={inputElementMobile}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      )}
      {i18n.language === "ar" && (
        <Toolbar>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              ref={inputElementDesk}
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                sx={{ width: "37px", height: "37px", marginRight: "5px" }}
                src="./static/images/userImg.jpg"
              />
            </IconButton>
            <IconButton
              sx={{ width: "37px", height: "37px", marginRight: "15px" }}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              sx={{ width: "37px", height: "37px" }}
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              ref={inputElementMobile}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            تويتر المزيف
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      )}
      {renderMobileMenu}
      {renderMenu}
    </AppBar>
  );
}

export default header;
