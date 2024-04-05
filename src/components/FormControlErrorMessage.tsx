/** @format */

import { View, Text } from "react-native";
import React from "react";
import { FormControl, WarningOutlineIcon } from "native-base";

const FormControlErrorMessage = ({ message }: { message: string }) => {
	return (
		<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
			{message}
		</FormControl.ErrorMessage>
	);
};

export default FormControlErrorMessage;
