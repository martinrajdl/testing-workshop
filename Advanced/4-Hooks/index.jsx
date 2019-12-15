import React, { useState, useEffect } from 'react';

export const ModalControler = props => {
	const { actionHandler, isOpenOnRender } = props;
	const [modalOpen, setModalOpen] = useState(isOpenOnRender);

	const handleModal = shouldBeOpen => () => {
		setModalOpen(shouldBeOpen);
	};

	useEffect(() => {
		actionHandler();
	});

	return (
		<>
			<button
				className="modalOpenButton"
				onClick={handleModal(true)}
			></button>
			{modalOpen && (
				<div className={'modal'}>
					<button
						className={'cross'}
						onClick={handleModal(false)}
					></button>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consectetur, repellat tempora exercitationem distinctio
						adipisci perferendis earum, asperiores ad officia
						sapiente quo eum sunt hic aliquam! Nesciunt soluta
						tenetur corrupti accusantium?
					</p>
				</div>
			)}
		</>
	);
};
