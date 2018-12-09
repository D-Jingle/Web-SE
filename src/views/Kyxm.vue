<template>
    <div class="container">
        <!--科研项目-->
        <div class="header">
            <div class="header-title">
                <h2>科研项目</h2>
            </div>
            <div class="date">
                2018-08-08
            </div>
        </div>
        <div class="artical">
            <pre>   学院始终坚持科学发展观，把科研工作的开展与学院发展、学科建设、人才培养紧密结合起来，注重内涵建设，推行激励机制，促进创新升级和人才升级，浓厚的科研意识和学术氛围渐趋形成。目前，学院已经形成了“物联网与数字林业”、“图像识别与智能控制”、“信息控制与智能计算”、“智能软件及信息融合”、“信号与信息处理”、“光电信息技术及机器视觉”6个稳定的研究方向。近几年来，又发展了一系列面向林业的新兴学术方向：CPS技术与无线传感、高性能计算与多媒体支撑、智能信息检索技术、资源信息海量数据存储与并行计算、深度嵌入式计算、云计算等。

        学院设有国家级重点学科“林业工程”下的“林业信息工程”博士点（含硕士点）学科1个，计算机科学与技术、软件工程一级硕士点学科2个，管理科学与工程（信息管理）工学学位点1个，计算机技术、软件工程、农业信息化专业学位点3个，另有1个省级“林业智能装备工程研究中心”，1个省级“林业生态大数据存储与高性能（云）计算工程技术研究中心”，1个省级TRIZ理论教研基地，1个校级“信息技术中心（应用软件研究室）”，以及中心所属的“信息控制与智能计算”、“智能软件及信息融合”、“图像识别与智能控制”、“信号与信息处理”、“数字与智慧林业”、“光电信息技术及机器视觉”、“林业物联网工程”、“高性能计算”8个研究室，建立了一支以6位博导为核心，27位硕士导师为骨干的科学研究队伍,凝练出以“智慧林业与敏捷生产”为主要特色的科研亮点。

        近年来，学院承担国家、省部级等各类科研任务130多项，经费3500余万元，取得诸多的研究成果。在国内外重要学术刊物和国际学术会议上发表学术论文1300余篇，其中500余篇被SCI/EI收录；出版专著、教材70余部；获省部级以上成果奖励40余项，获得知识产权200余件；参加国内外学术会议和学术交流100余人次。

        学院多年来一直将服务地方经济与社会发展为己任，在技术推广和成果转化方面为我国林业经济发展做出重要贡献，一些阶段性研究成果已经大范围推广应用，其中林间智能装备、木材加工敏捷生产、木材产销存数字林业技术成果的推广应用得到了行业的广泛认可和好评。

        部分科研项目列表：
            </pre>
            <table class="table">
                <thead>
                    <tr>
                        <th class="table-left">序号</th>
                        <th class="table-middle">项目类别</th>
                        <th class="table-right">项目名称</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in tableData" :key="index+'a'">
                        <td class="table-left">{{index+1}}</td>
                        <td class="table-middle">{{item.sort}}</td>
                        <td class="table-right">{{item.name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Jyfx",
        data() {
            return {
                tableData: [{
                    num: '1',
                    sort: '国家自然基金项目—面上项目',
                    name: '漆酶活化木质基材料模压成板的胶合机理研究'
                }, {
                    num: '2',
                    sort: '国家自然基金项目—面上项目',
                    name: '中密度纤维板连续平压多场耦合效应及精准工艺协同控制机理'
                }, {
                    num: '3',
                    sort: '国家自然基金项目—青年基金',
                    name: '面向中文网络评论的产品特征挖掘方法研究'
                }, {
                    num: '4',
                    sort: '国家自然基金项目—青年基金',
                    name: '基于引文网络图数据挖掘的热点技术领域预测研究'
                },{
                    num: '5',
                    sort: '国家“863”计划项目 -子课题',
                    name: '基于3S技术的森林资源数字化管理关键技术'
                },{
                    num: '6',
                    sort: '国家“863”计划项目-子课题',
                    name: '森林经营可持续生产决策支持技术'
                },{
                    num: '7',
                    sort: '国家十二五科技支撑项目-子任务',
                    name: '木塑复合材料制造关键技术研究与示范－木塑设备的自控技术'
                },{
                    num: '8',
                    sort: '国家星火计划项目',
                    name: '基于3S的东北地区造林生态决策支持系统的研究 '
                },{
                    num: '9',
                    sort: '引进国际先进林业科学技术计划“948”',
                    name: '连续平压热压机自动板形纠偏控制技术引进'
                },{
                    num: '10',
                    sort: '国家林业局林业科学技术推广项目',
                    name: '数字林业综合软件技术与应用'
                },{
                    num: '11',
                    sort: '教育部博士点博导类专项基金',
                    name: 'MDF 连续平压板形自动纠偏协同控制关键技术研究'
                },{
                    num: '12',
                    sort: '黑龙江省重点攻关项目',
                    name: '远程地面红外林火自动探测系统'
                },{
                    num: '13',
                    sort: '黑龙江省自然科学基金—面上项目',
                    name: '蛋白质相互作用预测方法研究'
                }]
            }
        }
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
        .table{
            thead{
                font-weight: bolder;
                .table-left{
                    width: 5rem;
                }
                .table-middle{
                    text-align: center;
                    width: 20rem;
                }
                .table-right{
                    text-align: center;
                    width: 37rem;
                }
            }
            &-left{
                text-align: center;
                width: 5rem;
            }
            th,td{
                border: 1px solid #000;
                padding-left: 0.5rem;
            }
        }
    }
</style>