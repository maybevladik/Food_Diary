const {Router} = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const config = require('config')

router.post('/register',
    [
       check('name', 'Мінімальна довжина імені 3 символа').isLength({min: 3}),
       check('email', 'Некоректний email').isEmail(),
       check('password', 'Мінімальна довжина пароля 7 символів').isLength({min: 7}) 
    ],
 async (req, res) => {
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні дані при реєстрації!'
            })
        }

        const {name, email, password} = req.body

        const candidate = await User.findOne({email})

        if(candidate){
            return res.status(400).json({
                message: 'Такий користувач вже існує'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({name, email, password: hashedPassword})

        await user.save()

        res.status(201).json({
            message: 'Користувач створений'
        })

    }
    catch(e){
        res.status(500).json({
            message: 'Помилка'
        })
    }
})

router.post('/login', 
[
    check('name', "Введіть ім'я").exists(),
    check('email', 'Введіть коректний email').normalizeEmail().isEmail(),
    check('password', 'Введіть пароль').exists()
],
async (req, res) => {
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні дані при вході в систему!'
            })
        }

        const {name, email, password} = req.body

        const user = await User.findOne({email})
        const userName = await User.findOne({name})

        if(!userName){
            return res.status(400).json({
                message: 'Користувач не знайдений'
            })
        }

        if(!user){
            return res.status(400).json({
                message: 'Користувач не знайдений'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({
                message: 'Невірний пароль, спробуйте ще раз'
            })
        }

        const token = jwt.sign(
            {userId: user.id}, 
            config.get("jwtSecret"),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})
    }
    catch(e){
        res.status(500).json({
            message: 'Помилка'
        })
    }
})

module.exports = router