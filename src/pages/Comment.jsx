import './css/comment.css'
export default function Comment() {
  return(
    <div class="contenedor-contact">
        <h3>Leave a comment for us ~</h3>
        <p>后续配合后台管理系统，将反馈信息发送到管理员处</p>
        <form>
            <input type="text" placeholder="Name" autofocus required/>
            <input type="text" placeholder="SurName" required/>
            <input type="tel" placeholder="Telephone" required/>
            <input type="text" placeholder="Theme" required/>
            <textarea placeholder="Describe your idea or problem here" required></textarea>
            {/* TODO:后续配合后台管理系统，将反馈信息发送到管理员处 */}
            <input type="submit" value="Confirm"/>
        </form>
    </div>
)
}