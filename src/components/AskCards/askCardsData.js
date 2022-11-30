import { nanoid } from 'nanoid';
import prosper from '../../assets/dashboard-images/prosper.webp';
import darrell from '../../assets/dashboard-images/darrell.webp';
import jacob from '../../assets/dashboard-images/jacob.webp';
import options from '../../assets/dashboard-images/options.webp';
import message from '../../assets/dashboard-images/message.webp';
import heartBold from '../../assets/dashboard-images/heartBold.webp';
import heart from '../../assets/dashboard-images/heart.webp';
import share from '../../assets/dashboard-images/share.webp';
import dollarCircle from '../../assets/dashboard-images/dollarCircle.webp';

const askCardsData = [
	{
		id: nanoid(),
		profilePicture: prosper,
		askName: 'Prosperoo',
		userName: '@prosper',
		time: '36secs',
		options,
		question:
			"Why does the NoReverse match error pop up when I'm trying to marginate my django website?",
		reply:
			'I actually have no idea why this happens but i feel like if we all come together we can think of something that could work so i’m placing a bounty on this question thanks.',
		tag: 'Python',
		viewReplies: message,
		likes: heartBold,
		share,
		reward: dollarCircle,
	},
	{
		id: nanoid(),
		profilePicture: darrell,
		askName: 'Darrell Stewart',
		userName: '@prosper',
		time: '36secs',
		options,
		question:
			"Why does the NoReverse match error pop up when I'm trying to marginate my django website?",
		reply:
			'I actually have no idea why this happens but i feel like if we all come together we can think of something that could work so i’m placing a bounty on this question thanks.',
		tag: 'Python',
		viewReplies: message,
		likes: heart,
		share,
		reward: dollarCircle,
	},
	{
		id: nanoid(),
		profilePicture: jacob,
		askName: 'Jacob Jones',
		userName: '@prosper',
		time: '36secs',
		options,
		question:
			"Why does the NoReverse match error pop up when I'm trying to marginate my django website?",
		reply:
			'I actually have no idea why this happens but i feel like if we all come together we can think of something that could work so i’m placing a bounty on this question thanks.',
		tag: 'Python',
		viewReplies: message,
		likes: heart,
		share,
		reward: dollarCircle,
	},
	{
		id: nanoid(),
		profilePicture: jacob,
		askName: 'Jacob Jones',
		userName: '@prosper',
		time: '36secs',
		options,
		question:
			"Why does the NoReverse match error pop up when I'm trying to marginate my django website?",
		reply:
			'I actually have no idea why this happens but i feel like if we all come together we can think of something that could work so i’m placing a bounty on this question thanks.',
		tag: 'Python',
		viewReplies: message,
		likes: heart,
		share,
		reward: dollarCircle,
	},
	{
		id: nanoid(),
		profilePicture: jacob,
		askName: 'Jacob Jones',
		userName: '@prosper',
		time: '36secs',
		options,
		question:
			"Why does the NoReverse match error pop up when I'm trying to marginate my django website?",
		reply:
			'I actually have no idea why this happens but i feel like if we all come together we can think of something that could work so i’m placing a bounty on this question thanks.',
		tag: 'Python',
		viewReplies: message,
		likes: heart,
		share,
		reward: dollarCircle,
	},
	{
		id: nanoid(),
		profilePicture: jacob,
		askName: 'Jacob Jones',
		userName: '@prosper',
		time: '36secs',
		options,
		question:
			"Why does the NoReverse match error pop up when I'm trying to marginate my django website?",
		reply:
			'I actually have no idea why this happens but i feel like if we all come together we can think of something that could work so i’m placing a bounty on this question thanks.',
		tag: 'Python',
		viewReplies: message,
		likes: heart,
		share,
		reward: dollarCircle,
	},
];

export default askCardsData;
