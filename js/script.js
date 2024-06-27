document.addEventListener('DOMContentLoaded', ()=> {
    const videosList = [
        {
            video: 'videos/1.mp4',
            thumb: 'images/1.jpg',
            title: 'Template 1',
            desc1: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
            desc2: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
        },
    {
        video: 'videos/2.mp4',
        thumb: 'images/2.jpg',
        title: 'Template 2',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”. '
    },
    {
        video: 'videos/3.mp4',
        thumb: 'images/3.jpg',
        title: 'Template 3',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        video: 'videos/4.mp4',
        thumb: 'images/4.jpg',
        title: 'Template 4',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        video: 'videos/5.mp4',
        thumb: 'images/5.jpg',
        title: 'Template 5',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    {
        video: 'videos/6.mp4',
        thumb: 'images/6.jpg',
        title: 'Template 6',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
    {
        video: 'videos/7.mp4',
        thumb: 'images/7.jpg',
        title: 'Template 7',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
     },
    {
        video: 'videos/8.mp4',
        thumb: 'images/8.jpg',
        title: 'Template 8',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        video: 'videos/9.mp4',
        thumb: 'images/9.jpg',
        title: 'Template 9',
        desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
     }];
    const mainVideo = document.querySelector('.main-video-container .main-video');
    const mainTitle = document.querySelector('.main-video-container .main-vid-title');
    const mainDesc1 = document.querySelector('.main-video-container .desc1');
    const mainDesc2 = document.querySelector('.main-video-container .desc2');
    const videoListContainer = document.getElementById('videosList');

      function renderVideoList(videos) {
    const html = videos.map(({ video, thumb, title, desc1, desc2 }) => `
        <div class="list">
            <video poster="${thumb}" src="${video}" class="list-video" preload="auto"></video>
            <h3 class="list-title">${title}</h3>
            <p class="desc1-item">${desc1}</p>
            <p class="desc2-item">${desc2}</p>
        </div>
    `).join('');
    videoListContainer.innerHTML = html;
}
    function attachEventListeners(videoElement) {
        videoElement.addEventListener('canplay', () => {
            console.log('Main video can start playing');
        });

        videoElement.addEventListener('waiting', () => {
            console.log('Main video is buffering');
        });

        videoElement.addEventListener('playing', () => {
            console.log('Main video is playing');
        });

        videoElement.addEventListener('error', (e) => {
            console.error('Error occurred: ', e);
        });

        videoElement.addEventListener('progress', ()=> {
            if (videoElement.buffered.length > 0) {
                const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
                const duration = videoElement.duration;
                console.log('Buffered: ' + bufferedEnd + ' / ' + duration);
            }
        });
    }
    function updateMainVideo(src, title, desc1, desc2) {
        mainVideo.src = src;
        mainVideo.play();
        mainTitle.innerHTML = title;
        mainDesc1.innerHTML = desc1;
        mainDesc2.innerHTML = desc2;
    }
    function initializeVideoList() {
        videoListContainer.innerHTML = renderVideoList(videosList);

        const videoItems = document.querySelectorAll('.video-list-container .list');

        videoItems.forEach((vid, index) => {
            vid.addEventListener('click', ()=> {
                videoItems.forEach(item => item.classList.remove('active'));
                vid.classList.add('active');
                
                const src = vid.querySelector('.list-video').src;
                const title = vid.querySelector('.list-title').innerHTML;
                const desc1 = vid.querySelector('.desc1-item').innerHTML;
                const desc2 = vid.querySelector('.desc2-item').innerHTML;

                updateMainVideo(src, title, desc1, desc2);
                attachEventListeners(mainVideo);
            });
            if (index === 0) {
                vid.click();
            }
        });
    }
    initializeVideoList();
});
