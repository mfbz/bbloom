import React from 'react';
import { Link } from 'react-router-dom';
import { VaporButton } from '../../components/vapor-button';
import { Typography, Layout } from 'antd';
import BBloomLogoSVG from '../../assets/logo.svg';
import { useMediaQuery } from 'react-responsive';

export const Home = React.memo(function Home() {
	const isSmallScreenOrMobile = useMediaQuery({ query: '(max-width: 992px)' });

	return (
		<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
			{!isSmallScreenOrMobile && (
				<div
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 9,
						backgroundImage: `url(${''})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'right',
						backgroundSize: 'auto 100%',
					}}
				></div>
			)}

			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					position: 'absolute',
					top: 0,
					left: 0,
					zIndex: 10,
				}}
			>
				<Layout style={{ background: '#00000000' }}>
					<Layout.Header
						style={{
							background: '#00000000',
							paddingLeft: isSmallScreenOrMobile ? 24 : 50,
							paddingRight: isSmallScreenOrMobile ? 24 : 50,
						}}
					>
						<div
							style={{
								width: '100%',
								height: '100%',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<div style={{}}>
								<Link to="/">
									<img src={BBloomLogoSVG} style={{ width: 120 }} alt="BBloom logo" />
								</Link>
							</div>

							<div style={{}}>
								<Link to="/app">
									<VaporButton danger={true} size={'large'}>
										App
									</VaporButton>
								</Link>
							</div>
						</div>
					</Layout.Header>

					<Layout.Content
						style={{
							background: '#00000000',
							paddingLeft: isSmallScreenOrMobile ? 24 : 50,
							paddingRight: isSmallScreenOrMobile ? 24 : 50,
						}}
					>
						<div
							style={{
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'flex-start',
							}}
						>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<div style={{ maxWidth: 720 }}>
									<Typography.Title level={isSmallScreenOrMobile ? 2 : 1}>
										How your DYNAMIC (watermelon/orange/salad etc.... fruits and vegetables) has been growth?
									</Typography.Title>
								</div>

								<div style={{ maxWidth: 720 }}>
									<Typography.Title level={isSmallScreenOrMobile ? 5 : 4} style={{ fontWeight: 'normal' }}>
										Follow the status of your food from seed to product.
									</Typography.Title>
								</div>

								<div style={{ marginTop: 32 }}>
									<Link to="/app">
										<VaporButton size={'large'} enlarge={true}>
											Watch now
										</VaporButton>
									</Link>
								</div>
							</div>
						</div>
					</Layout.Content>

					<Layout.Footer
						style={{
							background: '#00000000',
							paddingLeft: isSmallScreenOrMobile ? 24 : 50,
							paddingRight: isSmallScreenOrMobile ? 24 : 50,
						}}
					>
						<div
							style={{
								width: '100%',
								height: '100%',
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<div
								style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center' }}
							></div>
						</div>
					</Layout.Footer>
				</Layout>
			</div>
		</div>
	);
});
