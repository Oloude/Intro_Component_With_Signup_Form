# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![preview](./public/preview.png)

### Links

- Solution URL: [github](https://github.com)

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - extends JavaScript by adding types to the language
- [React hook form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js

type Inputs = {
    firstName: string,
    lastName: string,
    email : string,
    password : string
  }


function Form() {
  const {
    handleSubmit,
    formState,
    register
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const {errors} = formState

  return (
    <form action=" " onSubmit={handleSubmit(onSubmit)} noValidate className="bg-white rounded-lg p-6 flex flex-col">
        <div className="flex flex-col gap-3 mb-6">
        <Input type="text" placeholder="First Name" error={errors.firstName} errorMessage={errors.firstName?.message} {...register('firstName', {required : 'First name cannot be empty'})}/>
        <Input type="text" placeholder="Last Name" error={errors.lastName} errorMessage={errors.lastName?.message} {...register('lastName', {required : 'First name canot be empty'})}/>
        <Input type="email" placeholder="Email Address" error={errors.email} errorMessage={errors.email?.message} {...register('email', {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Looks like this is not an email",
            }
        })}/>
        <Input type="password" placeholder="Password" error={errors.password} errorMessage={errors.password?.message} {...register('password', {required : 'First name cannot be empty'})}/>
        </div>

        <button className="text-white p-4 border-b-4 border-b-green bg-green bg-opacity-90 rounded-md text-base uppercase mb-4">
        Claim your free trial
        </button>
        <p className="text-gray font-semibold text-sm text-center">By clicking the button, you are agreeing to our  <span className="text-red">Terms and Services</span></p>
    </form>
  )
}

```

### Useful resources

- [Youtube/codevolution](https://www.youtube.com/watch?v=KejZXxFCe2k&list=PLC3y8-rFHvwjmgBr1327BA5bVXoQH-w5s) - This helped me to integrate react hook form in this project.

## Author

- Frontend Mentor - [@0loude](https://www.frontendmentor.io/profile/oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
