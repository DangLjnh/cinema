import Layout from "layout/Layout";
import BookmarkPage from "pages/BookmarkPage";
import DiscoveryPage from "pages/DiscoveryPage";
import HistoryPage from "pages/HistoryPage";
import Homepage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage";
import SearchPage from "pages/SearchPage";
import SeriesPage from "pages/SeriesPage";
import TvShowPage from "pages/TvShowPage";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchMovie } from "redux/handler";
import DiscoveryTvShowPage from "pages/DiscoveryTvShowPage";
import DetailPage from "pages/DetailPage";
import LayoutDetail from "layout/LayoutDetail";
import { clientSide, tmdbAPI, tvAPI } from "config/config";
import WatchMoviePage from "pages/WatchMoviePage";
import WatchTvPage from "pages/WatchTvPage";
import LayoutDetailTv from "layout/LayoutDetailTv";
import LayoutDiscovery from "layout/LayoutDiscovery";
import NotFoundPage from "pages/NotFoundPage";
import CastPage from "pages/CastPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
const App = () => {
  return (
    <>
      {/* <AdvancedImage cldImg={myImage} /> */}
      <Routes>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route element={<Layout page="home"></Layout>}>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/tvshow" element={<TvShowPage></TvShowPage>}></Route>
          <Route path="/series" element={<SeriesPage></SeriesPage>}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route path="/cast/:castID" element={<CastPage></CastPage>}></Route>
          <Route path="/history" element={<HistoryPage></HistoryPage>}></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="/movie" element={<ProfilePage></ProfilePage>}></Route>
          <Route
            path="/bookmarked"
            element={<BookmarkPage></BookmarkPage>}
          ></Route>
        </Route>
        <Route element={<LayoutDiscovery category={tmdbAPI}></LayoutDiscovery>}>
          <Route
            path="/discovery/movie"
            element={<DiscoveryPage></DiscoveryPage>}
          ></Route>
        </Route>
        <Route element={<LayoutDiscovery category={tvAPI}></LayoutDiscovery>}>
          <Route
            path="/discovery/tvshow"
            element={<DiscoveryTvShowPage></DiscoveryTvShowPage>}
          ></Route>
        </Route>
        <Route element={<LayoutDetail></LayoutDetail>}>
          <Route
            // /movie/:movieID qua ch??? kh??c th?? d??ng useParams ????? l???y n?? v???
            path="/movie/:movieID"
            element={<DetailPage category={tmdbAPI}></DetailPage>}
          ></Route>
          <Route
            // /movie/:movieID qua ch??? kh??c th?? d??ng useParams ????? l???y n?? v???
            path="/tvshow/:tvID"
            element={<DetailPage category={tvAPI}></DetailPage>}
          ></Route>
          <Route
            path="/movie/:movieID/watch"
            element={<WatchMoviePage category={tmdbAPI}></WatchMoviePage>}
          ></Route>
        </Route>
        {/* <Route element={<LayoutDetail columnRight></LayoutDetail>}></Route> */}
        <Route element={<LayoutDetailTv></LayoutDetailTv>}>
          <Route
            path="/tvshow/:tvID/watch"
            element={<WatchTvPage category={tvAPI}></WatchTvPage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
