const wordBanks = {
    1: [
        { english: 'apple', chinese: '苹果' },
        { english: 'banana', chinese: '香蕉' },
        { english: 'cat', chinese: '猫' },
        { english: 'dog', chinese: '狗' },
        { english: 'elephant', chinese: '大象' }
    ],
    2: [
        { english: 'book', chinese: '书' },
        { english: 'pen', chinese: '笔' },
        { english: 'school', chinese: '学校' },
        { english: 'teacher', chinese: '老师' },
        { english: 'student', chinese: '学生' }
    ],
    3: [
        { english: 'red', chinese: '红色' },
        { english: 'blue', chinese: '蓝色' },
        { english: 'green', chinese: '绿色' },
        { english: 'yellow', chinese: '黄色' },
        { english: 'purple', chinese: '紫色' }
    ]
}

// 合并所有单词库创建完整单词库
wordBanks[4] = [
    ...wordBanks[1],
    ...wordBanks[2],
    ...wordBanks[3]
]

// 音频文件映射
const audioFiles = {
    correct: 'audio/correct.mp3',
    wrong: 'audio/wrong.mp3',
    words: {
        apple: 'audio/words/apple.mp3',
        banana: 'audio/words/banana.mp3',
        // ... 其他单词的音频文件
    }
}

// 导出数据
export { wordBanks, audioFiles }