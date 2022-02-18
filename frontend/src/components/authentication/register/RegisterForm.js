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

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const States = ["AL - Alabama",
    "AK - Alaska",
    "AZ - Arizona",
    "AR - Arkansas",
    "CA - California",
    'CO - Colorado',
    "CT - Connecticut",
    "DE - Delaware",
    "FL - Florida",
    "GA - Georgia",
    'HI - Hawaii',
    'ID - Idaho',
    'IL - Illinois',
    'IN - Indiana',
    'IA - Iowa',
    'KS - Kansas',
    'KY - Kentucky',
    'LA - Louisiana',
    'ME - Maine',
    'MD - Maryland',
    'MA - Massachusetts',
    'MI - Michigan',
    'MN - Minnesota',
    'MS - Mississippi',
    'MO - Missouri',
    'MT - Montana',
    'NE - Nebraska',
    'NV - Nevada',
    'NH - New Hampshire',
    'NJ - New Jersey',
    'NM - New Mexico',
    'NY - New York',
    'NC - North Carolina',
    'ND - North Dakota',
    'OH - Ohio',
    'OK - Oklahoma',
    'OR - Oregon',
    'PA - Pennsylvania',
    'RI - Rhode Island',
    'SC - South Carolina',
    'SD - South Dakota',
    'TN - Tennessee',
    'TX - Texas',
    'UT - Utah',
    'VA - Virginia',
    'VT - Vermont',
    'WA - Washington',
    'WI - Wisconsin',
    'WV - West Virginia',
    'WY - Wyoming'];

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
              autoComplete="city"
              type="City"
              label="City"
              {...getFieldProps('City')}
              error={Boolean(touched.City && errors.City)}
              helperText={touched.City && errors.City}
            />
            <TextField
              fullWidth
              autoComplete="state"
              type="State"
              label="State"
              {...getFieldProps('State')}
              error={Boolean(touched.State && errors.State)}
              helperText={touched.State && errors.State}
            />
            <TextField
              fullWidth
              autoComplete="zipcode"
              type="ZipCode"
              label="ZipCode"
              {...getFieldProps('ZipCode')}
              error={Boolean(touched.ZipCode && errors.ZipCode)}
              helperText={touched.ZipCode && errors.ZipCode}
            />
          </Stack>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
