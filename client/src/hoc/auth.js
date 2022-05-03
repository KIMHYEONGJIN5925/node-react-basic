import { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //option은
  //null : 모든 유저 출입 가능
  //true : 로그인한 유저만 가능
  // false : 로그인한 유저는 출입불가능
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);

        //로그인하지않은상태
        if (!response.payload.isAuth) {
          if (option) {
            window.location.replace("/login");
          }
        } else {
          //로그인한상태
          if (adminRoute && !response.payload.isAdmin) {
            window.location.replace("/");
          } else {
            if (option === false) {
              window.location.replace("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
