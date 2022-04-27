import smartBrain from '../../images/smartbrain.png';
import chinUp from '../../images/chinup.png';
import hatchways from '../../images/hatchways.png';

export const projectData = {
    project1: {
        title: 'Facial Recognition App',
        desc: 'Users can signin/signup, via EMAIL. Once logged in, users can upload URLs to images and the web app will draw a box around any detected faces in the image. App also keeps track of how many uploads a user submit.',
        imageUrl: smartBrain,
        demo: 'https://krownless-smart-brain.herokuapp.com/',
        github: 'https://github.com/krownlesskev/FaceRecognitionBrain'
    },
    project2: {
        title: 'Mental Health Awareness App',
        desc: 'This app was initially designed for practice getting data from an API, but then I decided to add more features and resources.',
        imageUrl: chinUp,
        demo: 'https://krownlesskev.github.io/chin-up/',
        github: 'https://github.com/krownlesskev/chin-up'
    },
    project3: {
        title: 'Weather App',
        desc: 'Front-End practice to get Data from an API and render it on the app using different components',
        imageUrl: hatchways,
        demo: 'https://krownlesskev.github.io/hatchways-frontend-practice/',
        github: 'https://github.com/krownlesskev/hatchways-frontend-practice'
    },
};