import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z.string().email().min(2).max(30),
    password: z.string().min(8).max(30)
  })
function publieur() {
    
    return ( <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type={'password'} placeholder="Password" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <Button className={''} disabled={isSubmitting} type="submit">
            {isSubmitting && <Loader className={'mx-2 my-2 animate-spin'}/>} {' '} Login
          </Button>
        </form>
      </Form> );
}

export default publieur;