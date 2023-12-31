import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/Button";

/* 회원가입/로그인 폼을 보여주는 컴포넌트 */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #425166;
    margin-bottom: 1rem;
  }
`;

/* Input 스타일 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #adb5bd;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid #495057;
  }
  & + & {
    margin-top: 1rem;
  }
`;

/* 폼 하단 로그인 및 회원가입 링크  */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: #868e96;
    text-decoration: underline;
    &:hover {
      color: #212529;
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  font-size: 1.125rem;
`;

const textMap = {
    login: '로그인',
    register: '회원가입',
};

/* 에러 메시지  */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput 
                  autoComplete="username" 
                  name="username" 
                  placeholder="아이디"
                  onChange={onChange}
                  value={form.username} 
                />
                <StyledInput
                  autoComplete="new-password"
                  name="password"
                  placeholder="비밀번호"
                  type="password"
                  onChange={onChange}
                  value={form.password}
                />
                {type === 'register' && (
                    <StyledInput
                      autoComplete="new-password"
                      name="passwordConfirm"
                      placeholder="비밀번호 확인"
                      type="password"
                      onChange={onChange}
                      value={form.passwordConfirm}
                    />
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop>{text}</ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
