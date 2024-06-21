import React, { useEffect, useState } from 'react';
import './css/register.css';

export default function Register() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState({ length: '', format: '' });
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [note, setNote] = useState('');
    const [noteInfo, setNoteInfo] = useState('');
    const [school, setSchool] = useState('');
    const [major, setMajor] = useState('');
    const [sex, setSex] = useState('');
    const [favour, setFavour] = useState([]);
    const [majors, setMajors] = useState([]);
    const [formResult, setFormResult] = useState('');

    useEffect(() => {
        if (username.length > 10) {
            setUsernameError('姓名长度不能超过10个字符 x');
        } else if (username.length === 0) {
            setUsernameError('姓名不能为空 x');
        } else {
            setUsernameError('');
        }
    }, [username]);

    useEffect(() => {
        if (phone.length !== 11) {
            setPhoneError(prev => ({ ...prev, length: '电话号码长度错误 ×' }));
        } else {
            setPhoneError(prev => ({ ...prev, length: '电话号码长度验证通过 √' }));
        }

        if (isNaN(phone)) {
            setPhoneError(prev => ({ ...prev, format: '请输入纯数字 ×' }));
        } else {
            setPhoneError(prev => ({ ...prev, format: '' }));
        }
    }, [phone]);

    useEffect(() => {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
        if (!reg.test(email)) {
            setEmailError('邮箱格式输入有误，请重新输入 x');
        } else {
            setEmailError('');
        }
    }, [email]);

    useEffect(() => {
        setNoteInfo(`${note.length}/40，剩余可输入${40 - note.length}个字符。`);
    }, [note]);

    useEffect(() => {
        const majorOptions = [
            ["软件工程", "计算机", "数字媒体"],
            ["自动化", "数控", "机械制造"],
            ["食品安全", "化学分析", "工程制药"]
        ];
        if (school) {
            setMajors(majorOptions[school - 1]);
        }
    }, [school]);

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        setFormResult(`姓名：${username}<br>年龄：${age}<br>性别：${sex}<br>所在学院：${school}<br>所在专业：${major}<br>爱好：${favour.join(' ')}<br>电话号码：${phone}<br>电子邮件：${email}<br>备注：${note}`);
    };

    return (
        <div className="formularios">
            <div className="contenedor-register">
                <h3>用户注册</h3>
                <div className="box">
                    <form id="form-register" onSubmit={handleFormSubmit}>
                        <div className="item">
                            <label htmlFor="username">姓名:</label>
                            <input id="username" name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <span id="inname">{usernameError}</span>
                        </div>
                        <div className="item">
                            <label htmlFor="age">年龄:</label>
                            <input id="age" name="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className="item">
                            <fieldset>
                                <legend>性别:</legend>
                                <label htmlFor="male">
                                    <input id="male" type="radio" name="sex" value="男" onChange={(e) => setSex(e.target.value)} /> 男
                                </label>
                                <label htmlFor="female">
                                    <input id="female" type="radio" name="sex" value="女" onChange={(e) => setSex(e.target.value)} /> 女
                                </label>
                            </fieldset>
                        </div>
                        <div className="item">
                            <label htmlFor="school">所在学院:</label>
                            <select name="school" id="school" value={school} onChange={(e) => setSchool(e.target.value)}>
                                <option value="0">请选择所在学院</option>
                                <option value="1">信息学院</option>
                                <option value="2">机械学院</option>
                                <option value="3">生化学院</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="major">所在专业:</label>
                            <select name="major" id="major" value={major} onChange={(e) => setMajor(e.target.value)}>
                                <option value="0">请选择所在专业</option>
                                {majors.map((major, index) => (
                                    <option key={index} value={major}>{major}</option>
                                ))}
                            </select>
                        </div>
                        <div className="item">
                            <fieldset>
                                <legend>爱好:</legend>
                                <label htmlFor="sport">
                                    <input id="sport" type="checkbox" name="favour" value="运动" onChange={(e) => setFavour([...favour, e.target.value])} /> 运动
                                </label>
                                <label htmlFor="music">
                                    <input id="music" type="checkbox" name="favour" value="音乐" onChange={(e) => setFavour([...favour, e.target.value])} /> 音乐
                                </label>
                                <label htmlFor="movie">
                                    <input id="movie" type="checkbox" name="favour" value="电影" onChange={(e) => setFavour([...favour, e.target.value])} /> 电影
                                </label>
                                <label htmlFor="reading">
                                    <input id="reading" type="checkbox" name="favour" value="阅读" onChange={(e) => setFavour([...favour, e.target.value])} /> 阅读
                                </label>
                            </fieldset>
                        </div>
                        <div className="item">
                            <label htmlFor="phone">电话号码:</label>
                            <input id="phone" name="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <span id="inphone1">{phoneError.length}</span>
                            <span id="inphone2">{phoneError.format}</span>
                        </div>
                        <div className="item">
                            <label htmlFor="email">电子邮箱:</label>
                            <input className="" id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span id="inemail">{emailError}</span>
                        </div>
                        <div className="item">
                            <label htmlFor="note">备注:</label>
                            <textarea id="note" rows="4" maxLength="40" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                            <span id="innote">{noteInfo}</span>
                        </div>
                        <div className="item">
                            <button id="submit" type="submit">提交</button>
                        </div>
                    </form>
                    <div id="sum" dangerouslySetInnerHTML={{ __html: formResult }}></div>
                </div>
            </div>
        </div>
    );
}
