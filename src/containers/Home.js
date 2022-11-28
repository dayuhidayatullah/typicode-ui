import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCommentByPostId,
  getAllPost,
  getDetailPost,
} from "../appRedux/actions/posts";
import { useNavigate } from "react-router-dom";
import { getDataUser } from "../appRedux/actions/users";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPagination, setCurrentPagination] = useState(1);
  const [content, setContent] = useState("list");
  const { postList, detailPost, comments } = useSelector((state) => state.post);
  const { userList } = useSelector((state) => state.user);
  const [totalPage] = useState(Math.round(postList.length / 10));
  const [displayComment, setDisplayComment] = useState(false);
  const [user, setUser] = useState({});
  const widthUsername = document.querySelector(".username-post");
  // console.info(500 - offsetWidth - 30, "<<< apa dis");
  useEffect(() => {
    dispatch(getAllPost({}));
    if (window?.localStorage?.username) dispatch(getDataUser({}));
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("username")) navigate("/");
    console.info(localStorage.getItem("username"), "<<<<< local storage");
  }, [localStorage.getItem("username")]);
  useEffect(() => {
    setUser(
      userList.find((el) => el.username === localStorage.getItem("username"))
    );
  }, [userList]);
  console.info(postList, "<<<< userList");
  const clickNextPagination = () => {
    setCurrentPagination((page) => page + 1);
  };
  const clickPreviousPagination = () => {
    setCurrentPagination((page) => page - 1);
  };
  function changePage(number) {
    // const pageNumber = Number(event.target.);
    setCurrentPagination(number);
  }
  const getPaginatedData = () => {
    const startIndex = currentPagination * 10 - 10;
    const endIndex = startIndex + 10;
    // console.info(startIndex, endIndex, ">><<<< index");
    return postList.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPagination - 1) / 3) * 3;
    console.info(totalPage, start);
    if (totalPage - 1 === start)
      return new Array(1).fill().map((_, idx) => start + idx + 1);
    return new Array(3).fill().map((_, idx) => start + idx + 1);
  };
  console.info(getPaginatedData(), getPaginationGroup(), "<<<< data");
  const getNameUser = (id) => {
    const findUser = userList.find((el) => el.id === id);
    return findUser?.username;
  };
  return (
    <div className="container">
      <Header page="home" setDetailUser={setContent}></Header>
      <div className="container-home">
        <div className="title-content">
          <p>Post</p>
          <div className="line-title"></div>
        </div>
        {content === "list" && (
          <>
            <div className="search">
              <span className="fa fa-search"></span>
              <input placeholder="Search" />
            </div>
            <div className="content-home mt-20">
              {getPaginatedData()?.map((el) => {
                return (
                  <div className="content-home-item d-flex gap-30">
                    <div className="mt-5 username-post">
                      {getNameUser(el?.userId)}
                    </div>
                    <div className="d-flex direction-column gap-10">
                      <div className="text-muted font-weight-500">
                        {el?.title}
                      </div>
                      <div className="d-flex mb-20 align-items-center">
                        <div className="fa fa-comment-o blue mr-8"></div>
                        <div className="mr-20 blue">
                          {Math.floor(Math.random() * 10)}
                        </div>
                        <div
                          className="blue cursor-pointer"
                          onClick={() => {
                            dispatch(getDetailPost({ id: el?.id }));
                            dispatch(getAllCommentByPostId({ id: el?.id }));
                            setContent("detail");
                          }}
                        >
                          Detail
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="content-home-item-container"> */}
              {/* </div> */}
            </div>
            <div className="d-flex justify-content-end pagination-container gap-20">
              <div
                className={
                  currentPagination === 1
                    ? "text-muted cursor-disable"
                    : "text-muted cursor-pointer"
                }
                onClick={() => {
                  if (currentPagination !== 1) clickPreviousPagination();
                }}
              >
                prev
              </div>
              <div className="d-flex gap-30 text-muted cursor-pointer">
                {getPaginationGroup().map((el, index) => (
                  <div
                    className="text-align-center"
                    onClick={() => changePage(el)}
                  >
                    <span className="mb-3">{el}</span>
                    {el === currentPagination && (
                      <div className="line-pagination mt-5"></div>
                    )}
                  </div>
                ))}
              </div>
              <div
                className={
                  currentPagination === totalPage
                    ? "text-muted cursor-disable"
                    : "text-muted cursor-pointer"
                }
                onClick={() => {
                  if (currentPagination !== totalPage) clickNextPagination();
                }}
              >
                next
              </div>
            </div>
          </>
        )}
        {content === "detail" && (
          <>
            <div className="button-back-container mb-20">
              <div
                className="fa fa-arrow-left justify-content-start"
                onClick={() => setContent("list")}
              ></div>
            </div>
            {/* <div className="content-home"></div> */}
            <div
              className=" justify-center d-flex  align-center gap-30"
              style={{ maxWidth: `500px`, width: "100%" }}
            >
              <div className="username-post" style={{ color: "white" }}>
                {getNameUser(detailPost?.userId)}
              </div>
              <div>{detailPost?.title}</div>
            </div>
            <div className="content-home mt-20">
              <div className="content-home-item d-flex gap-30">
                <div className="username-post">
                  {getNameUser(detailPost?.userId)}
                </div>
                <div className="d-flex direction-column gap-10">
                  <div className="text-muted font-weight-500">
                    {detailPost?.body}
                  </div>
                  {!displayComment && (
                    <div
                      className="d-flex mb-10 align-items-center cursor-pointer"
                      onClick={() => setDisplayComment(!displayComment)}
                    >
                      <div className="fa fa-comment-o blue mr-8"></div>
                      <div className="mr-20 blue">{comments?.length ?? 0}</div>
                      {/* <div
                      className="blue cursor-pointer"
                      onClick={() => {
                        dispatch(getDetailPost({ id: el?.id }));
                        dispatch(getAllCommentByPostId({ id: el?.id }));
                        setContent("detail");
                      }}
                    >
                      Detail
                    </div> */}
                    </div>
                  )}
                  {displayComment && (
                    <>
                      <div
                        className="d-flex all-comment-title mb-10 cursor-pointer"
                        onClick={() => setDisplayComment(false)}
                      >
                        All Comment
                      </div>
                      {comments?.map((el) => {
                        return (
                          <>
                            <div className="d-flex gap-20">
                              <div className="username-post">
                                {el?.name?.slice(0, 5)}
                              </div>
                              <div className="text-muted font-weight-500">
                                {el?.body}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {content === "detailProfile" && (
          <>
            <div className="button-back-container mb-20">
              <div
                className="fa fa-arrow-left justify-content-start"
                onClick={() => setContent("list")}
              ></div>
            </div>
            <div className="content-home mt-20 d-flex direction-column gap-30">
              <div className="content-home-item d-flex gap-30 ">
                <div className="text-muted w-100px">Username</div>
                <span>:</span>

                <div className="text-bold">{user?.username}</div>
              </div>
              <div className="content-home-item d-flex gap-30">
                <div className="text-muted w-100px">Email </div>
                <span>:</span>

                <div className="text-bold">{user?.email}</div>
              </div>
              <div className="content-home-item d-flex gap-30">
                <div className="text-muted w-100px">Address</div>
                <span>:</span>
                <div className="text-bold">{user?.address?.street}</div>
              </div>
              <div className="content-home-item d-flex gap-30">
                <div className="text-muted w-100px">Phone </div>
                <span>:</span>

                <div className="text-bold">{user?.phone}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
