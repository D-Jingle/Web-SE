<template>
    <div class="container">
        <!--专业简介-->
        <div class="header">
            <div class="header-title">
                <h2>信息与计算机科学技术实验中心</h2>
            </div>
            <div class="date">
                <!--2018-08-08-->
            </div>
        </div>
        <div class="artical">
            <pre>   信息与计算机科学技术实验中心成立于2012年7月，是整合了原计算机系专业实验室，信管专业实验室，软件专业实验室以及1978年就已成立的计算机基础实验室而组成的信息与计算机技术实践教学综合性专业化实践教学平台。
        中心组建后实现了资源共享，优势互补的办学目标，自动化的实践教学管理和人性化的教学服务为师生各类实验教学活动提供了优质的学习实践环境。
        中心面向全校计算机基础类实验教学和计算机相关专业与信息相关的本科和硕士专业课程的实践教学。主要承担计算机系统类、计算机软件工程实践类、计算机应用技术类、数学软件类、硬件及嵌入式应用、网络技术类、信息管理类等的课程的实践教学课程与创新活动。
        中心下设计算机公共基础实验室, 计算机系统结构实验室, 网络工程与安全实验室, 信息管理系统综合实验室以及信息技术创新实训实验室等5个分室25个房间，建筑面积4800m2。配备品牌台式计算机1200余台，计算机系统结构、计算机组成原理等系统类实验箱90套；单片机原理、ARM、FPGA、物联网等硬件相关实验箱280余套。实验教学资产1500余万元。
        中心目前有专职实验教师8名。博士2人，硕士6人，副高级职称1人，中级7人。
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Laboratory"
    }
</script>

<style scoped lang="scss">
    .container{
        background-color: #fff;
        margin: 2rem 0;
        padding: 0 5rem 5rem 5rem;

        .header{
            padding: 2rem 0 1rem 0;

            &-title{
                text-align: center;
                border-bottom: 1px solid #1a6840;
            }
            .date{
                /*float: right;*/
                margin-top: 1rem;
            }
        }
        .artical{
            margin: 0 5rem;
            text-align: left;
            line-height: 3rem;
        }
    }
</style>