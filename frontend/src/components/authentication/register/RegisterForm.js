import * as Yup from 'yup';
import * as React from "react";
import { AutoComplete, ComboBox, MultiColumnComboBox, DropDownList, MultiSelect, DropDownTree } from '@progress/kendo-react-dropdowns';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// import { Dropdown, Menu } from 'semantic-ui-react'

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const States = [
    {text: 'AL - Alabama'},
    {text: "AK - Alaska"},
    {text: "AZ - Arizona"},
    {text: "AR - Arkansas"},
    {text: "CA - California"},
    {text:'CO - Colorado'},
    {text:"CT - Connecticut"},
    {text:"DE - Delaware"},
    {text:"FL - Florida"},
    {text:"GA - Georgia"},
    {text:'HI - Hawaii'},
    {text:'ID - Idaho'},
    {text:'IL - Illinois'},
    {text:'IN - Indiana'},
    {text:'IA - Iowa'},
    {text:'KS - Kansas'},
    {text:'KY - Kentucky'},
    {text:'LA - Louisiana'},
    {text:'ME - Maine'},
    {text:'MD - Maryland'},
    {text:'MA - Massachusetts'},
    {text:'MI - Michigan'},
    {text:'MN - Minnesota'},
    {text:'MS - Mississippi'},
    {text:'MO - Missouri'},
    {text:'MT - Montana'},
    {text:'NE - Nebraska'},
    {text:'NV - Nevada'},
    {text:'NH - New Hampshire'},
    {text:'NJ - New Jersey'},
    {text:'NM - New Mexico'},
    {text:'NY - New York'},
    {text:'NC - North Carolina'},
    {text:'ND - North Dakota'},
    {text:'OH - Ohio'},
    {text:'OK - Oklahoma'},
    {text:'OR - Oregon'},
    {text:'PA - Pennsylvania'},
    {text:'RI - Rhode Island'},
    {text:'SC - South Carolina'},
    {text:'SD - South Dakota'},
    {text:'TN - Tennessee'},
    {text:'TX - Texas'},
    {text:'UT - Utah'},
    {text:'VA - Virginia'},
    {text:'VT - Vermont'},
    {text:'WA - Washington'},
    {text:'WI - Wisconsin'},
    {text:'WV - West Virginia'},
    {text:'WY - Wyoming'}
  ];

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(25, 'Too Long!').required('Last name required'),
    Address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long').required('Address is required'),
    Address2: Yup.string().min(2, 'Too Short!').max(100, 'Too Long').optional('Address is optional'),
    City: Yup.string().min(2, 'Too Short!').max(100, 'Too Long').required('City is required'),
    State: Yup.string().min(2, 'Too Short!').max(2, 'Too Long').required('State is required'),
    ZipCode: Yup.string().min(5, 'Too Short!').max(9, 'Too Long').required('ZipCode is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      Address: '',
      Address2: '',
      City: '',
      State: '',
      ZipCode: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  // const DropdownExampleSimple = () => (
  //   <Menu compact>
  //     <Dropdown text='Dropdown' options={States} simple item />
  //   </Menu>
  // )

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="address"
            type="Address"
            label="Address"
            {...getFieldProps('Address')}
            error={Boolean(touched.Address && errors.Address)}
            helperText={touched.Address && errors.Address}
          />

          <TextField
            fullWidth
            autoComplete="address"
            type="Address2"
            label="Address2 (Optional)"
            {...getFieldProps('Address2')}
            error={Boolean(touched.Address2 && errors.Address2)}
            helperText={touched.Address2 && errors.Address2}
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              autoComplete = "city"
              type = "City"
              label = "City"
              {...getFieldProps('City') }
              error = { Boolean(touched.City && errors.City) }
              helperText = { touched.City && errors.City }
            />

            <TextField
              fullWidth
              autoComplete="state"
              type="State"
              label="State"
              {...getFieldProps('State')}
              error={Boolean(touched.State && errors.State)}
              helperText={touched.State && errors.State}
            >
              {/* <div class="ui compact menu">
                <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
                  <div aria-atomic="true" aria-live="polite" role="alert" class="divider text">
                    Dropdown
                  </div>
                  <i aria-hidden="true" class="dropdown icon"></i>
                  <div class="menu transition">
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                      <span class="text">
                        Choice 1
                      </span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                      <span class="text">
                        Choice 2
                      </span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                      <span class="text">
                        Choice 3
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </TextField>

            <TextField
              fullWidth
              autoComplete = "zipcode"
              type = "ZipCode"
              label = "ZipCode"
              {...getFieldProps('ZipCode') }
              error = { Boolean(touched.ZipCode && errors.ZipCode) }
              helperText = { touched.ZipCode && errors.ZipCode }
            />
        </Stack>

        <TextField
          fullWidth
          autoComplete = "username"
          type = "email"
          label = "Email address"
          {...getFieldProps('email') }
          error = { Boolean(touched.email && errors.email) }
          helperText = { touched.email && errors.email }
        />

        <TextField
          fullWidth
          autoComplete = "current-password"
          type = { showPassword ? 'text' : 'password' }
          label = "Password" {...getFieldProps('password') }
          InputProps = {
            {
              endAdornment: (
                <InputAdornment position = "end" >
                  <IconButton edge = "end"
                    onClick = {
                        () => setShowPassword((prev) => !prev)
                    } >
                    <Icon icon = { showPassword ? eyeFill : eyeOffFill }/>
                  </IconButton>
                </InputAdornment>
              )
            }
          }
        error = { Boolean(touched.password && errors.password) }
        helperText = { touched.password && errors.password }
        />

        <LoadingButton
          fullWidth
          size = "large"
          type = "submit"
          variant = "contained"
          loading = { isSubmitting } >
          Register
        </LoadingButton>
        </Stack>
        </Form>
        </FormikProvider>
  );
}
