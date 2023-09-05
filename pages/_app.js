import React from 'react';
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {/* 可以在此添加页面共享的布局或导航栏 */}

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
