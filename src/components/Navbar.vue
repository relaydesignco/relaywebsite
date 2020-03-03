<template>
  <div class="site-header">
		<header>
			<router-link to="/" class="logo">
        <img src="/static/logo.svg" alt="Relay Design Co. Logo">
        <!--
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.9 134">
          <path d="M5.5 35.6c-.1 0-.2-.1-.2-.2V10.8c0-.1.1-.2.2-.2h3.7c.1 0 .2.1.2.2l.3 2.9c1.7-2.5 4.6-3.9 7.6-3.8 2.9-.1 5.6 1.3 7.2 3.7 1.1 1.6 1.6 3.5 1.6 5.5 0 .1-.1.2-.2.2h-4.2c-.1 0-.2-.1-.2-.2 0-1.3-.4-2.5-1.2-3.4-1-1-2.3-1.6-3.8-1.5-2.6 0-4.6 2-5.4 4-.7 2-1.1 4.1-1.1 6.3v11c0 .1-.1.2-.2.2H5.5z" fill="#329AE9"/>
          <path d="M21.6 19.1c0-1.3-.4-2.6-1.3-3.6-1-1.1-2.5-1.7-3.9-1.6-2.5.2-4.7 1.8-5.6 4.2-.7 2-1.1 4.2-1.1 6.4v10.9H5.5V10.8h3.7l.3 3.7c1.6-2.8 4.6-4.5 7.8-4.3 2.8 0 5.4 1.3 7 3.6 1.1 1.6 1.6 3.4 1.6 5.4h-4.3zM41.2 36.3c-3 0-5.9-1.2-8-3.3-2.5-2.6-3.9-6.2-3.7-9.8-.1-3.7 1.2-7.3 3.7-10.1 2.1-2.1 5-3.3 8-3.2 2.9-.1 5.7 1 7.8 3 2.4 2.7 3.7 6.3 3.6 10v1.5c0 .1-.1.2-.2.2H34.2c0 2.2.9 4.2 2.4 5.8 1.2 1.2 2.9 1.8 4.5 1.8 1.6.1 3.2-.4 4.4-1.4.9-.7 1.6-1.7 2-2.8 0-.1.1-.2.2-.2h4c.1 0 .2.1.2.3v.1c-1.1 4.9-5.2 8.1-10.7 8.1zm6.5-15.6c-.1-1.8-.8-3.5-2-4.9-1.2-1.3-2.8-2-4.5-1.9-4.3 0-6.6 4-6.8 6.8h13.3z" fill="#329AE9"/>
          <path d="M34 24.4c0 2.3.8 4.5 2.5 6.2 1.3 1.2 3 1.9 4.7 1.9 1.6.1 3.3-.4 4.5-1.5 1-.8 1.6-1.8 2-3h4c-1.2 5.1-5.4 8-10.6 8-2.9 0-5.7-1.1-7.8-3.2-2.5-2.6-3.8-6.1-3.6-9.6-.1-3.6 1.2-7.2 3.6-9.9 2.1-2.1 4.9-3.2 7.8-3.2 2.8-.1 5.6 1 7.6 3 2.4 2.7 3.7 6.2 3.6 9.8v1.5H34zm11.9-8.7c-1.2-1.3-2.9-2-4.7-2-4.7 0-7 4.4-7.1 7.3H48c0-2-.8-3.9-2.1-5.3zM55.9 35.6c-.1 0-.2-.1-.2-.2v-3.5c0-.1.1-.2.2-.2h6.8V4H56c-.1 0-.2-.1-.2-.2V.2c0-.1.1-.2.2-.2h11.1c.1 0 .2.1.2.2v31.4H74c.1 0 .2.1.2.2v3.5c0 .1-.1.2-.2.2H55.9z" fill="#329AE9"/>
          <path d="M55.9 35.4v-3.5h7V3.7H56V.2h11.1v31.6H74v3.5l-18.1.1zM86.9 36.3c-6 0-8.8-3.9-8.8-7.5 0-3.9 2.8-7.9 9-8.3l7.4-.4v-1.6c.1-1.2-.3-2.5-1.2-3.4-1.1-.9-2.5-1.4-4-1.4-1.6-.1-3.1.4-4.3 1.4-.7.7-1.1 1.7-1.2 2.7 0 .1-.1.2-.2.2h-4.1c-.1 0-.2-.1-.3-.2.1-2 .9-3.9 2.4-5.2 2.1-1.9 4.9-2.9 7.8-2.8 4.3 0 7.6 1.8 9 5 .5 1.2.8 2.5.8 3.8v11.9c0 1.2.6 1.4 1.2 1.4h1.1c.1 0 .2.1.2.3v3.5c0 .1-.1.2-.2.2h-2.7c-2 .1-3.6-1.4-3.9-3.4-1.9 2.5-4.9 3.9-8 3.8zm1.2-12.2c-2.5.1-5.2 1.3-5.2 4.3 0 2.4 1.7 3.8 4.7 3.8 1.9.1 3.7-.6 5-1.9 1.4-1.4 2.1-3.4 2.1-5.4v-1.2l-6.6.4z" fill="#329AE9"/>
          <path d="M98.8 35.7c-2 0-3.6-1.5-3.7-3.5V32H95c-1.5 2.5-4.7 4-8.1 4-5.9 0-8.5-3.8-8.5-7.3s2.5-7.7 8.8-8l7.7-.4v-1.8c.1-1.3-.3-2.7-1.3-3.6-1.1-1-2.6-1.5-4.1-1.4-1.6-.1-3.3.4-4.5 1.5-.8.8-1.3 1.8-1.3 2.9h-4.1c.1-1.9.9-3.7 2.3-5 2.1-1.8 4.8-2.8 7.6-2.7 4.8 0 7.6 2.2 8.8 4.9.5 1.2.8 2.4.7 3.6v11.9c0 1.3.6 1.7 1.5 1.7h1.1v3.5h-2.8zm-3.9-12.2l-6.8.4c-2.6.1-5.4 1.4-5.4 4.5 0 2.2 1.4 4.1 4.9 4.1 1.9.1 3.8-.7 5.2-2C94.2 29 95 27 95 25l-.1-1.5zM105.6 46c-.1 0-.2-.1-.2-.2V42c0-.1.1-.2.2-.2h3.6c1.6.1 3-.8 3.5-2.3l1.6-4L103.6 11c-.1-.1 0-.3.1-.3H108.9c.1 0 .2.1.2.2l7.7 19 7.1-19c0-.1.1-.2.2-.2h4.7c.1 0 .2.1.2.3v.1l-12.1 29.7c-1 2.5-2.8 5.5-7 5.5l-4.3-.3z" fill="#329AE9"/>
          <path d="M116.9 40.4c-1.3 3.1-3.1 5.3-6.8 5.3h-4.4V42h3.6c1.7.2 3.2-.9 3.8-2.5l1.7-4.1L104 10.8h5.1l7.9 19.6 7.3-19.6h4.7l-12.1 29.6z" fill="#329AE9"/>
          <g class="designco" opacity=".25">
            <path d="M11 80.5c-2.7 0-5.4-1-7.3-2.9C1.3 75.1 0 71.5 0 67.3s1.3-8 3.9-10.4c1.9-1.8 4.5-2.8 7.2-2.8s5.2 1 7 3V44.5c0-.1.1-.3.2-.3H22.5c.1 0 .2.1.2.2v35.1c0 .1-.1.2-.2.2h-3.7c-.1 0-.2-.1-.2-.2l-.2-2.5c-1.9 2.3-4.6 3.5-7.4 3.5zm.6-22.3c-1.6 0-3.2.6-4.3 1.8-2.1 2.1-2.6 5.1-2.6 7.3 0 3.2.9 5.8 2.5 7.4 1.2 1.1 2.8 1.8 4.4 1.7 1.5 0 2.9-.5 4-1.5 2.2-2 2.7-5.2 2.7-7.6s-.5-5.6-2.7-7.6c-1-1-2.5-1.6-4-1.5z"/>
            <path d="M18.8 79.6l-.3-3.2c-1.4 2.5-4.8 3.8-7.5 3.8s-5.2-1-7.2-2.9C1.5 74.9.3 71.4.3 67.3S1.6 59.5 4 57.1c1.9-1.8 4.4-2.8 7-2.8 2.9-.1 5.6 1.2 7.3 3.5V44.5h4.1v35.1h-3.6zm-3-20.1c-1.1-1-2.6-1.6-4.2-1.6-1.7 0-3.4.7-4.5 1.9-1.8 2-2.8 4.7-2.6 7.4 0 2.9.7 5.7 2.6 7.6 1.2 1.2 2.9 1.8 4.6 1.8 1.5 0 3-.5 4.1-1.6 2-1.8 2.8-4.7 2.8-7.8s-.8-5.9-2.8-7.7zM40.2 80.5c-3 0-5.9-1.2-8-3.3-2.5-2.6-3.9-6.2-3.7-9.8-.1-3.7 1.2-7.3 3.7-10 2.1-2.1 5-3.3 8-3.2 2.9-.1 5.7 1 7.8 3 2.4 2.7 3.7 6.3 3.6 10v1.5c0 .1-.1.2-.2.2H33.2c0 2.2.9 4.2 2.4 5.8 1.2 1.2 2.9 1.8 4.5 1.8 1.6.1 3.2-.4 4.4-1.4.9-.7 1.6-1.7 2-2.8 0-.1.1-.2.2-.2h4c.1 0 .2.1.2.3v.1c-1.1 4.8-5.2 8-10.7 8zm6.6-15.6c-.1-1.8-.8-3.5-2-4.9-1.2-1.3-2.8-1.9-4.5-1.9-4.3 0-6.6 4-6.8 6.8h13.3z"/>
            <path d="M33 68.6c0 2.3.8 4.5 2.5 6.2 1.3 1.2 3 1.9 4.7 1.8 1.6.1 3.3-.4 4.5-1.5 1-.8 1.6-1.8 2-3h4c-1.2 5.1-5.4 8-10.6 8-2.9 0-5.7-1.2-7.8-3.2-2.5-2.6-3.8-6.1-3.6-9.6-.1-3.6 1.2-7.2 3.6-9.9 2.1-2.1 4.9-3.2 7.8-3.2 2.8-.1 5.6 1 7.6 3 2.4 2.7 3.7 6.2 3.5 9.8v1.5H33zm11.9-8.7c-1.2-1.3-2.9-2-4.7-2-4.7 0-7 4.4-7.1 7.3H47c0-2-.7-3.9-2.1-5.3zM67.4 80.5c-3.8 0-6.5-.9-8.6-2.9-1.6-1.6-2.5-3.7-2.5-5.9 0-.1.1-.2.2-.2h4.1c.1 0 .2.1.2.2.1 1.4.8 2.8 2 3.6 1.4.9 3 1.3 4.6 1.2 1.7.1 3.3-.4 4.7-1.3.7-.6 1.1-1.4 1.1-2.3 0-1.7-1.2-2.8-3.4-3.2l-6.3-.9c-1.8-.2-3.4-1.1-4.7-2.4-1-1.2-1.5-2.8-1.5-4.4 0-1.8.8-3.6 2.1-4.9 2.1-1.9 4.8-3 7.7-2.9 3.6 0 6.6 1.2 8.3 3.4 1.1 1.4 1.7 3.1 1.8 4.8 0 .1-.1.3-.2.3h-4.1c-.1 0-.2-.1-.2-.2-.1-1.1-.6-2.1-1.4-2.8-1.1-.9-2.6-1.4-4.1-1.4-1.4-.1-2.8.4-4 1.2-.8.6-1.2 1.4-1.3 2.4 0 1.6.9 2.5 3 2.8l6.7 1c3.2.5 6.4 2.8 6.4 7 .1 1.9-.7 3.7-2 5.1-1.8 1.6-5 2.7-8.6 2.7z"/>
            <path d="M75.8 77.3c-1.9 1.9-5.1 2.9-8.4 2.9s-6.2-.7-8.4-2.9c-1.5-1.5-2.4-3.5-2.4-5.7h4.1c.1 1.5.9 2.9 2.1 3.8 1.4.9 3.1 1.3 4.8 1.2 1.7.1 3.4-.4 4.8-1.4.8-.6 1.2-1.5 1.2-2.5 0-1.6-1-3-3.7-3.4l-6.3-.9c-1.7-.2-3.3-1-4.5-2.3-1-1.2-1.5-2.7-1.5-4.2 0-1.8.7-3.5 2-4.7 2-1.9 4.7-2.9 7.5-2.8 3.4 0 6.4 1.1 8.1 3.3 1.1 1.3 1.7 3 1.7 4.7h-4.1c-.1-1.2-.6-2.2-1.5-3-1.2-1-2.7-1.5-4.2-1.5-1.5-.1-3 .4-4.2 1.2-.8.6-1.3 1.6-1.4 2.6 0 1.8 1.2 2.7 3.3 3.1l6.7 1c3 .4 6.2 2.6 6.2 6.7.1 1.8-.6 3.6-1.9 4.8zM83.5 79.8c-.1 0-.2-.1-.2-.2V76c0-.1.1-.2.2-.2h5.7V58.7h-5.7c-.1 0-.2-.1-.2-.2V55c0-.1.1-.2.2-.2h10.1c.1 0 .2.1.2.2v20.8h5.5c.1 0 .2.1.2.2v3.6c0 .1-.1.2-.2.2H83.5zm5.8-31.1c-.1 0-.2-.1-.2-.2v-4.2c0-.1.1-.2.2-.2h4.2c.1 0 .2.1.2.2v4.2c0 .1-.1.2-.2.2h-4.2z"/>
            <path d="M83.5 79.6V76h5.9V58.5h-5.9V55h10.1v21h5.7v3.6H83.5zm5.8-31.2v-4.2h4.2v4.2h-4.2zM115.3 91.3c-2.9 0-7.1-.3-9.7-2.9-1.2-1.2-1.9-2.8-1.9-4.5 0-2.3 1.2-4.4 3.2-5.5-1.6-.8-2.5-2.4-2.5-4.2.1-2.1 1.3-3.9 3.2-4.8-3.5-3.4-3.6-9-.3-12.5 2-2 4.8-3 7.6-2.8 2 0 3.9.4 5.6 1.3.9-2.1 3-3.4 5.2-3.3.4 0 .8 0 1.2.1.1 0 .2.1.2.2v3.4c0 .1-.1.2-.2.2h-.9c-1.2 0-2.4.7-2.8 1.9 1.1 1.5 1.7 3.3 1.6 5.2 0 2.2-.8 4.4-2.3 6-2 2-4.8 3.1-7.7 3-1.5 0-2.9-.2-4.3-.8-1 .3-1.7 1-1.9 2-.1.5.1 1 .4 1.3.9.7 1.9 1 3 .8h5.4c2.6 0 6.1.5 8.2 2.7 1.3 1.3 2 3.1 2 5s-.8 3.8-2.2 5.1c-2.3 2.6-6.8 3.1-10.1 3.1zm-4.4-11.7c-1.6.5-2.8 1.9-2.9 3.6 0 .9.3 1.8.9 2.4 1.6 1.6 5 1.6 6.6 1.6 3.3 0 5.5-.6 6.6-1.7.6-.6 1-1.5 1-2.3 0-3.4-3.3-3.7-6.4-3.7l-5.8.1zm4-21.7c-3.3 0-5.5 2.1-5.5 5.2 0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c-.1-3.1-2.2-5.2-5.5-5.2z"/>
            <path d="M125.4 88.2c-2.4 2.3-6.6 2.9-10.1 2.9-3.3 0-7.1-.4-9.5-2.8-1.2-1.1-1.9-2.7-1.8-4.3 0-2.4 1.4-4.5 3.5-5.6-1.7-.7-2.8-2.3-2.8-4.1.1-2.1 1.4-4 3.4-4.8-3.5-3.2-3.9-8.6-.7-12.1l.2-.2c2-1.9 4.7-2.9 7.4-2.8 2-.1 4 .4 5.7 1.5.8-2.1 2.8-3.5 5.1-3.5.4 0 .8 0 1.2.1v3.4h-.9c-1.4-.1-2.7.9-3.1 2.2 1.1 1.5 1.7 3.3 1.7 5.1 0 2.1-.8 4.2-2.2 5.8-2 2-4.7 3.1-7.5 3-1.5 0-2.9-.3-4.3-.8-1.1.3-1.9 1.2-2.1 2.3-.2 2.1 2.1 2.4 3.7 2.4h5.4c2.9 0 6.1.6 8 2.6 1.3 1.3 2 3 1.9 4.8-.1 1.8-.8 3.6-2.2 4.9zm-9.8-8.9h-4.7c-1.8.5-3 2.1-3.1 3.9 0 1 .3 1.9 1 2.6 1.6 1.6 4.7 1.7 6.8 1.7s5.2-.2 6.8-1.8c.7-.7 1.1-1.6 1.1-2.5 0-4.1-4.8-3.9-7.9-3.9zm-.7-21.6c-3.5 0-5.7 2.3-5.7 5.4.2 3.2 2.9 5.6 6.1 5.4 2.9-.2 5.2-2.5 5.4-5.4 0-3.1-2.3-5.4-5.8-5.4zM149.4 79.8c-.1 0-.2-.1-.2-.2V64c0-3.7-1.7-5.6-5.1-5.6-2.4.2-4.4 1.6-5.3 3.8-.7 2-1.1 4.1-1 6.2v11.2c0 .1-.1.2-.2.2h-4.2c-.1 0-.2-.1-.2-.2V55c0-.1.1-.2.2-.2h4.1c.1 0 .1 0 .2.1 0 0 .1.1.1.2l-.1 2.8c1.8-2.3 4.5-3.7 7.4-3.7 5.7 0 9 3.4 9 9.3v16.2c0 .1-.1.2-.2.2l-4.5-.1z"/>
            <path d="M149.4 79.6V64c0-3.6-1.6-5.9-5.4-5.9-2.4.2-4.6 1.7-5.6 3.9-.8 2-1.1 4.2-1.1 6.3v11.2h-4.2V55h4.1l-.1 3.7c1.6-2.7 4.5-4.4 7.7-4.3 5.6 0 8.8 3.4 8.8 9.1v16.2l-4.2-.1zM12.8 120.4c-2.9 0-5.7-1.1-7.9-3.1-2.6-2.7-4-6.3-3.9-10.1-.2-3.8 1.2-7.4 3.9-10.1 2.1-2 4.9-3.1 7.9-3.1 2.7-.1 5.4.9 7.4 2.8 1.8 1.7 3 4 3.2 6.4 0 .1-.1.3-.2.3H19c-.1 0-.2-.1-.2-.2-.2-1.4-.8-2.7-1.9-3.7-1.1-1-2.5-1.5-4-1.5-1.6 0-3.2.6-4.4 1.7-2.1 1.9-2.6 5.1-2.6 7.4s.4 5.4 2.6 7.4c1.2 1.1 2.8 1.7 4.4 1.7 1.5 0 2.9-.5 4-1.5 1-.9 1.7-2.2 1.9-3.6 0-.1.1-.2.2-.2h4.1c.1 0 .3.1.3.2-.2 2.5-1.3 4.8-3.2 6.5-2.1 1.8-4.7 2.8-7.4 2.7z"/>
            <path d="M12.8 94.2c2.7-.1 5.3.9 7.2 2.7 1.8 1.6 2.9 3.9 3.1 6.3h-4.2c-.2-1.5-.9-2.8-2-3.8-1.2-1-2.7-1.5-4.2-1.5-1.7 0-3.3.6-4.6 1.8-2.1 1.9-2.7 4.9-2.7 7.6s.6 5.6 2.7 7.5c1.2 1.2 2.9 1.8 4.6 1.8 3.1.1 5.8-2.3 6.2-5.3H23c-.2 2.4-1.3 4.7-3.1 6.3-2 1.8-4.6 2.7-7.2 2.6-2.9 0-5.6-1.1-7.7-3-2.6-2.6-4-6.2-3.8-9.9-.2-3.7 1.2-7.3 3.8-9.9 2.1-2 4.9-3.1 7.8-3.2zM39.4 120.4c-3 .1-5.8-1-8-3-2.7-2.7-4.1-6.4-3.9-10.2-.2-3.8 1.3-7.5 4-10.2 2.2-2 5-3.1 8-3 2.9 0 5.7 1 7.9 3 2.7 2.7 4.1 6.3 3.9 10.1.2 3.8-1.3 7.5-3.9 10.2-2.2 2-5.1 3.1-8 3.1zm-.1-22.3c-1.6 0-3.2.6-4.4 1.7-2.3 2.1-2.7 5.5-2.7 7.4s.3 5.3 2.7 7.4c2.5 2.2 6.3 2.2 8.8 0 2.3-2.1 2.7-5.6 2.7-7.4s-.3-5.3-2.7-7.4c-1.2-1.1-2.7-1.7-4.4-1.7z"/>
            <path d="M47.1 117.2c-2.1 2-4.8 3-7.7 3-2.9 0-5.7-1-7.8-3-2.6-2.7-4-6.3-3.8-10-.2-3.7 1.2-7.3 3.8-10 2.1-2 4.9-3 7.8-3 2.9 0 5.6 1 7.7 3 2.6 2.6 4 6.2 3.8 9.9.2 3.7-1.2 7.4-3.8 10.1zm-3.2-17.6c-2.6-2.3-6.5-2.3-9.1 0-2.1 1.9-2.8 4.9-2.8 7.5s.7 5.7 2.8 7.6c2.6 2.3 6.5 2.3 9.2 0 2.1-1.9 2.8-4.9 2.8-7.6s-.8-5.6-2.9-7.5z"/>
          </g>
          <path d="M2.1 130.3h46.2c.2 0 .4.2.4.4v3c0 .2-.2.4-.4.4H2.1c-.2 0-.4-.2-.4-.4v-3c0-.3.2-.4.4-.4z" fill="#329AE9"/>
        </svg>
        -->
      </router-link>
		</header>
		<div class="navbar" v-bind:class="{ 'flyout': flyout, 'scrolled': scrolled }"  v-on:mouseover="active=true" v-on:mouseout="endNav">
      <button type="button" class="toggle tcon tcon-plus tcon-plus--minus" v-bind:class="{ 'tcon-transform': flyout }" v-on:click="toggleFlyout" aria-label="add item">
        <span class="tcon-visuallyhidden">add item</span>
      </button>
			<ul id="navlist" ref="navlist">
				<li v-for="link in links" v-on:mouseover="mouseover" v-bind:class="{ active: link.active }">
					<router-link :to="{ path: link.url }" v-on:click.native="flyout = false">{{link.title}}</router-link>
				</li>
			</ul>
			<transition v-on:enter="enter">
				<span id="bar" ref="bar" v-show="active"></span>
			</transition>
			</div>
  </div>
</template>


<script>
  import Velocity from 'velocity-animate';

  export default {
    name: 'navbar',
    data () {
    	return {
    	  active: false,
        flyout: false,
        scrolled: false,
    	  links: [
    			{ title:'Home', url:'/', active: false },
          { title:'Projects', url:'/projects', active: false },
          { title:'Services', url:'/services', active: false },
          { title:'Company', url:'/company', active: false },
    			{ title:'Contact', url:'/contact', active: false },
    	  ],
    	  animQueue: "custom"
    	}
    },
    methods: {
    	endNav: function(e) {
    	  // turn off bar, reset inactive state for all links
    	  this.active = false;
    	  for (var i = 0; i < this.links.length; i++) {
      		this.links[i].active = false;
    	  };
    	},
    	mouseover: function(e) {
    	  // find which link in the list we're hovering over,
    	  // then set as active
    	  for (var i = 0; i < this.links.length; i++) {
      		if (this.links[i].title == e.target.innerHTML) {
      		  this.links[i].active = true;
      		}
    	  }
    	},
    	enter: function (el, done) {
    	  // on entering the transition, left the left position of the bar
    	  // and queue its animation (use queue to prevent stutter)

        let activeLink = this.$el.querySelector('.active') || this.$el.querySelector('.navbar li:first-child');

    	  if (activeLink) {
      		let leftPos = activeLink.offsetLeft + 16;
      		Velocity(el, { left: leftPos + 'px' }, { queue: this.animQueue, complete:done });
      		Velocity.Utilities.dequeue(el, this.animQueue);
    	  };
      },
      toggleFlyout: function (e) {
        this.flyout = !this.flyout;
      },
      closeFlyout: function (e) {
        this.flyout = false;
      },
      handleScroll () {
        this.scrolled = window.scrollY > 50;
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "lang" attribute to use scss instead -->
<style lang="scss">

  @import "../assets/_variables.scss";

  .logo {
    display: inline-block;
    margin: 2em 0 0;
    width: 140px;
    height: auto;
    transition: .5s;

    // .designco {
    //   transform: rotateX(90deg);
    //   transform-origin: bottom center;
    //   fill-opacity: 0;
    //   transition: .5s;
    // }
  }

  .site-header {
  	position: relative;
    width: 85%;
  	max-width: $page-max-width;
  	margin: 0 auto;

    @media only screen and (min-width: $screen-md-min) {
      width: 100%;
    }
  }

  .toggle {
    position: fixed;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    color: white;
    background-color: $brand-primary;
    border: 0;
    z-index: 9100;
    transition: .3s;

    @media only screen and (min-width: $screen-md-min) {
      right: -100%;

      .scrolled & {
        right: 0;
      }
    }
  }

  .tcon {
    appearance: none;
    border: none;
    cursor: pointer;
    transition: .3s;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;

    > * {
      display: block;
    }

    &:hover,
    &:focus {
      outline: none; // see issue #36 https://github.com/grayghostvisuals/transformicons/issues/36
    }
    &::-moz-focus-inner {
      border: 0;
    }
  }

  .tcon-plus {

    &::before,
    &::after {
      content: "";
      border-radius: 1px;
      display: block;
      width: 60%;
      height: 10%;
      position: absolute;
      top: 44%;
      left: 20%;
      transition: .3s;
      background: white;
    }

    &:after {
      // transform: rotate(90deg);
    }
  }

  .tcon-plus--minus {
    &.tcon-transform {
      &::before {
        transform: rotate(45deg) translate(0, 0);
      }

      &::after {
        transform: rotate(135deg) translate(0, 0);
      }
    }
  }

  .tcon-visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    &:active,
    &:focus {
      clip: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      position: static;
      width: auto;
    }
  }

  .navbar {

  	@media only screen and (min-width: $screen-md-min) {
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
  	}

  	ul {
      display: none;
      margin: 0;
      padding: 0;
      list-style: none;

  		@media only screen and (min-width: $screen-md-min) {
        display: block;
        text-align: right;

        .scrolled & {
          display: none;
        }
  		}
  	}

  	li {
  		display: inline-block;
  		text-align: left;
  		padding: 0 16px;
  		margin: 0;
  		letter-spacing: .05em;

  		@media only screen and (min-width: $screen-md-min) {
    		font-size: 14px;
  		}

  		a {
    		display: inline-block;
    		text-decoration: none;
    		font-weight: bold;
    		color: $text-color;
    		transition: color .2s;
    		padding: 30px 0;

    		&:hover {
    			color: $brand-primary;
    		}

        @media only screen and (min-width: $screen-md-min) {

          &.router-link-exact-active {
            color: $brand-primary;
          }
        }
  		}
  	}

    &.flyout {

      ul {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        padding: 2em;
        background: $brand-primary;
        text-align: left;
        z-index: 9000;

        @media only screen and (min-width: $screen-md-min) {
          width: 50%;
        }

        li {
          display: block;

          a {
            padding: .5em 0;
            font-size: 2.5em;
            color: white;
            font-weight: bold;
            letter-spacing: 0;

            @media only screen and (min-width: $screen-sm-min) {
              padding: .5em 1em;
              font-size: 3em;
              letter-spacing: .05em;
            }
          }
        }
      }
    }

  	#bar {
      display: none;

      @media only screen and (min-width: $screen-md-min) {
        display: block;
        width: 20px;
        height: 3px;
        background: $brand-primary;
        position: absolute;
        bottom: 12px;
        left: 0;
      }
  	}
  }

</style>
