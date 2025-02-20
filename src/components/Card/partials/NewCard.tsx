import React, { FC, ReactNode, useState } from 'react';
import { NewEnvTrigger, StyledNewCard } from '../styles';
import UIModal from '../../Modal';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Head2 from '../../Heading/H2';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';

export type NewEnvironmentType = {
	/**
	 * An array of React nodes representing each step in the environment.
	 */
	steps: ReactNode[];
	/**
	 * callback to fire env creation mutation with all required form item/val object
	 */
	onCreateEnvironment: (formItems: Record<string, unknown>) => Promise<any>;

	loading: boolean;
	/**
	 * required form fields to validate and allow step change
	 */
	requiredFormItems?: string[];
	/**
	 * table/list view
	 */
	renderType?: 'card' | 'listItem';
};
export const NewCard: FC<NewEnvironmentType> = ({
	steps,
	onCreateEnvironment,
	requiredFormItems,
	loading,
	renderType = 'card',
}) => {
	const [open, setOpen] = useState(false);

	const [newEnvForm] = useForm();
	const [currentStep, setCurrentStep] = useState(1);
	const totalSteps = steps?.length ?? 0;

	const [nextStepDisabled, setNextStepDisabled] = useState(true);

	const getRequiredFieldsValues = () => {
		const values = newEnvForm.getFieldsValue(true);
		const requiredValues = {};

		if (Array.isArray(requiredFormItems)) {
			for (const key of requiredFormItems) {
				if (!values[key]) {
					return false; // return false if any required field is falsy
				}
				//@ts-ignore
				requiredValues[key] = values[key];
			}
		}
		return requiredValues;
	};

	const closeModal = () => {
		setCurrentStep(1);
		setOpen(false);
		setNextStepDisabled(true);
		newEnvForm.resetFields();
	};

	const handleStepChange = () => {
		const fields = getRequiredFieldsValues();
		if (!fields) return;

		if (currentStep < totalSteps) {
			setCurrentStep(currentStep + 1);
		} else {
			// create env cb
			onCreateEnvironment(fields).then(() => setOpen(false));
		}
	};

	const handleCancel = (e: any) => {
		// outside click, back or cancel buttons
		if (e.target.id !== 'cancel-btn' && e.target.parentElement.id !== 'cancel-btn') {
			closeModal();
			return;
		}
		if (currentStep <= 1) {
			closeModal();
			return;
		}
		setCurrentStep(currentStep - 1);
	};

	return (
		<StyledNewCard $type={renderType}>
			<NewEnvTrigger onClick={() => setOpen(true)}>
				<PlusOutlined data-cy="create-environment" /> New environment
			</NewEnvTrigger>

			<UIModal
				title={<EnvironmentTitle>Create an Environment</EnvironmentTitle>}
				subTitle={
					<EnvironmentSteps>
						Step {currentStep} of {totalSteps}
					</EnvironmentSteps>
				}
				open={open}
				destroyOnClose
				cancelText={currentStep === 1 ? 'Cancel' : 'Back'}
				onCancel={handleCancel}
				onOk={handleStepChange}
				confirmText={currentStep < totalSteps ? 'Next' : 'Create'}
				confirmLoading={loading}
				confirmDisabled={nextStepDisabled}
			>
				<StyledStep>
					<Form
						form={newEnvForm}
						onFieldsChange={() => {
							const fields = getRequiredFieldsValues();
							setNextStepDisabled(!!!fields);
						}}
					>
						{steps[currentStep - 1]}
					</Form>
				</StyledStep>
			</UIModal>
		</StyledNewCard>
	);
};

const StyledStep = styled.div`
	min-height: 300px;
	padding-top: 5.5rem;
	padding-bottom: 6.8125rem;
`;

const EnvironmentTitle = styled(Head2)`
	font-size: 28px !important;
	line-height: 32px !important;
	margin-bottom: 0 !important;
	margin-top: 1.5rem !important;
`;

const EnvironmentSteps = styled.span`
	font-size: 10px;
	line-height: 22px;
	font-weight: 400;
	margin-top: -10px;
`;
