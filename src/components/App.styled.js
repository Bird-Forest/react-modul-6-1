import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledAppContainer = styled.div`
  /* max-width: 1200px; */
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  .title {
    text-transform: uppercase;
    text-decoration: overline;
    color: green;
  }
  /* &:hover,
  &:focus {
    background-color: yellow;
    color: blue;
  } */
  .postList {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 25px;
    margin-right: auto;
    margin-left: auto;
  }
  .postListItem {
    display: inline-block;
    width: 100%;
    padding: 20px;
    border: 1px solid black;
    border-radius: 20px;
  }
  .error {
    padding: 20px;
    font-size: 24px;
    border: 1px solid black;
    background-color: red;
    color: white;
  }
  .typeBtn {
    display: inline-flex;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;

    transition: all 0.3s;

    &.active {
      color: black;
      border: 1px solid black;
      background-color: #fff;
    }
  }

  .header-link {
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    display: inline-block;
    padding: 20px;
    font-size: 22px;
    text-decoration: none;
    margin-right: 15px;

    transition: all 0.3s;

    &.active {
      border: 1px solid white;
      background-color: black;
      color: white;
    }
  }
`;
export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;
