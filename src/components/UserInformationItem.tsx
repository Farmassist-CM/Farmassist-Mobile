/** @format */

import { Text, View } from "native-base";

export interface UserInfo {
	title: string;
	value: string;
}
const UserInformationItem = (userInfos: UserInfo) => {
	return (
		<View
			mb={2}
			borderRadius="lg"
			shadow="1"
			p={4}
			_dark={{
				bg: "dark.100",
			}}
			_light={{
				bg: "white",
			}}>
			<Text fontWeight="bold" fontSize="xl">
				{userInfos.title}
			</Text>
			{/* <Divider my={2} /> */}
			<Text my={2} fontSize={"lg"}>
				{userInfos.value}
			</Text>
		</View>
	);
};

export default UserInformationItem;
