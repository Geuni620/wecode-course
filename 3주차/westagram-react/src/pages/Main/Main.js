import React, { useState } from "react";
import "./Main.scss";

// icon
function Main() {
  // 댓글달기 기능 구현

  return (
    <div className="wrap-main">
      <nav className="status-bar">
        <div className="status-bar__logo">
          <a href="login.html">
            <img alt="westa-logo" src="/images/instagram.png" />
          </a>
          <div className="status-bar__logo--stick"></div>
          <span>westagram</span>
        </div>
        <form className="status-bar__search">
          <input type="text" placeholder="검색" />
          <i className="fa-solid fa-magnifying-glass fa-xs"></i>
        </form>
        <div className="status-bar__mypage">
          <div className="status-bar__icon">
            <img alt="icon-compass" src="/images/compass.png" />
            <img alt="icon-heart" src="/images/heart.png" />
            <img alt="icon-profile" src="/images/profile.png" />
          </div>
        </div>

        <div className="profile hidden">
          <ul className="profile__settings">
            <li className="profile__setting">
              <i className="fa-solid fa-user fa-sm"></i>
              <span>Profile</span>
            </li>
            <li className="profile__setting">
              <i className="fa-solid fa-bookmark fa-sm"></i>
              <span>Saved</span>
            </li>
            <li className="profile__setting">
              <i className="fa-solid fa-gear fa-sm"></i>
              <span>Settings</span>
            </li>
            <li className="profile__setting">
              <i className="fa-solid fa-arrow-right-to-bracket fa-sm"></i>
              <span>Log out</span>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main">
        <div className="feeds">
          <article className="feedscontent">
            <div className="feedscontent__profile">
              <div className="feedscontent__topbar">
                <img
                  alt="myprofile-picture"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
                <span>그니당</span>
              </div>
              <div className="feedscontent__icon">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="feedscontent__img">
              <img
                alt="feed-picture"
                src="https://avatars.githubusercontent.com/u/56650238?v=4"
              />
            </div>

            <div className="feedscontent__status-bar">
              <div className="feedscontent__right">
                <img alt="feedscontent-icon" src="/images/compass.png" />
                <img alt="feedscontent-icon" src="/images/heart.png" />
                <img alt="feedscontent-icon" src="/images/profile.png" />
              </div>
              <div className="feedscontent__left">
                <img alt="feedscontent-icon" src="/images/profile.png" />
              </div>
            </div>

            <div className="feedscontent__like">
              <div className="feedscontent__like-text feedscontent__like-text--flex">
                <img
                  alt="feedscontent-avatar"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
                <span>그니당</span>님 <span>외 10명</span>이 좋아합니다.
              </div>
              <div className="feedscontent__like-text">
                <ul className="feedscontent__comment"></ul>
              </div>
            </div>
            <form className="feedscomment">
              <input
                className="feedscomment__input"
                type="text"
                placeholder="댓글 달기..."
                maxLength="50"
              />
              <button className="feedscomment__btn">게시</button>
            </form>
          </article>
        </div>
        <main className="main-right">
          <div className="main-right__mystory">
            <div className="main-right__img main-right__img--xl">
              <img
                alt="mystory-picture"
                src="https://avatars.githubusercontent.com/u/56650238?v=4"
              />
            </div>
            <div className="main-right__text">
              <h3>wecode_bootcamp</h3>
              <h3>WeCode | 위코드</h3>
            </div>
          </div>
          <div className="main-right__allstory">
            <div className="main-right__title">
              <h3>스토리</h3>
              <h3>모두 보기</h3>
            </div>
            <div className="main-right__otherstory">
              <div className="main-right__img">
                <img
                  alt="story-picture"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
              </div>
              <div className="main-right__text">
                <h3>wecode_bootcamp</h3>
                <h3>16분 전</h3>
              </div>
            </div>
            <div className="main-right__otherstory">
              <div className="main-right__img">
                <img
                  alt="story-picture"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
              </div>
              <div className="main-right__text">
                <h3>wecode_bootcamp</h3>
                <h3>16분 전</h3>
              </div>
            </div>
            <div className="main-right__otherstory">
              <div className="main-right__img">
                <img
                  alt="story-picture"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
              </div>
              <div className="main-right__text">
                <h3>wecode_bootcamp</h3>
                <h3>16분 전</h3>
              </div>
            </div>
          </div>

          <div className="main-right__recommend">
            <div className="main-right__title">
              <h3>회원님을 위한 추천</h3>
              <h3>모두 보기</h3>
            </div>
            <div className="main-right__otherstory main-right__otherstory--follow">
              <div className="main-right__img">
                <img
                  alt="recommend-picture"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
              </div>
              <div className="main-right__text">
                <h3>wecode_bootcamp</h3>
                <h3>_legend_a님 외 2명이 ...</h3>
              </div>
              <div className="main-right__follow">
                <h3>팔로우</h3>
              </div>
            </div>
            <div className="main-right__otherstory main-right__otherstory--follow">
              <div className="main-right__img">
                <img
                  alt="recommend-picture"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
              </div>
              <div className="main-right__text">
                <h3>wecode_bootcamp</h3>
                <h3>_legend_a님 외 2명이 ...</h3>
              </div>
              <div className="main-right__follow">
                <h3>팔로우</h3>
              </div>
            </div>
            <div className="main-right__otherstory main-right__otherstory--follow">
              <div className="main-right__img">
                <img
                  alt="recommend-picture"
                  src="https://avatars.githubusercontent.com/u/56650238?v=4"
                />
              </div>
              <div className="main-right__text">
                <h3>wecode_bootcamp</h3>
                <h3>_legend_a님 외 2명이 ...</h3>
              </div>
              <div className="main-right__follow">
                <h3>팔로우</h3>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}

export default Main;
