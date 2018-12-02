const menuList = [
    {
        title: '个人信息管理',
        key: '/Info',
        children: [
            {
                title: '我的信息',
                key: '/Info/myInfo',
            },
            {
                title: '修改信息',
                key: '/Info/changeMyInfo',
            },
        ]
    },
    {
        title: '课程管理',
        key: '/course',
        children: [
            {
                title: '我的课程',
                key: '/course/myCourse',
            },
            {
                title: '增加课程',
                key: '/course/addCourse',
            },
            {
                title: '修改课程',
                key: '/course/modifyCourse',
            },
            {
                title: '删除课程',
                key: '/course/deleteCourse',
            },
            {
                title: '查询课程',
                key: '/course/searchCourse',
            },
            {
                title: '导出课程',
                key: '/course/exportCourse',
            }
        ]
    },
    {
        title: '学生管理',
        key: '/student',
        children: [
            {
                title: '我的学生',
                key: '/student/myStudent',
            },
            {
                title: '修改学生信息',
                key: '/student/modifyStudent',
            },
            {
                title: '增加学生',
                key: '/student/addStudent',
            },
            {
                title: '删除学生',
                key: '/student/deleteStudent',
            }
        ]
    },
    {
        title: '其他',
        key: '/others',
        children: [
            {
                title: '我的学生',
                key: '/student/myStudent',
            },
            {
                title: '修改学生信息',
                key: '/student/modifyStudent',
            },
            {
                title: '增加学生',
                key: '/student/addStudent',
            },
            {
                title: '删除学生',
                key: '/student/deleteStudent',
            }
        ]
    }

];
export default menuList;