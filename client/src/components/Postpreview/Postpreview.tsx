// import { ListWrap, ListRight, ListLeft } from './styled'

import { PostDB } from 'utils/functions/type'
import { PreviewContainer, TitleWrap, PostInfoWrap } from './styled';
import { Link } from 'react-router-dom';

type GreetingProps = {
	postDB: PostDB;
}

function Postpreview({ postDB }: GreetingProps) {
	const { uuid, title, nickname, createdAt, comment, view, thumsup, content } = postDB;
	// console.log(postDB)
	return (
		<>
			<PreviewContainer>
				<TitleWrap>
					<Link to='/detail'>
						<div>{title}</div>
					</Link>
				</TitleWrap>
				<PostInfoWrap>
					<div>{view}</div>
					<div>{thumsup}</div>
					<div>{nickname}</div>
					<div>{createdAt.slice(0, 10)}</div>
				</PostInfoWrap>
			</PreviewContainer>
		</>
	);
	// return (
	// 	<>
	// 		<ListWrap>
	// 			<ListLeft>
	// 				<div className='listTitle'>{dummy.title}</div>
	// 				<div className='listComment'>({dummy.comment})</div>
	// 			</ListLeft>
	// 			<ListRight>
	// 			<div className='listView'>
	// 				{dummy.view}
	// 			</div>
	// 			<div className='listThumsup'>
	// 				{dummy.thumsup}
	// 			</div>
	// 			<div className='listWriter'>
	// 				카뎃
	// 			</div>
	// 			<div className='listCreatedat'>
	// 				{dummy.createdAt.slice(0, 10)}
	// 			</div>
	// 			</ListRight>
	// 		</ListWrap>
	// 	</>
	// );
}

export default Postpreview;
