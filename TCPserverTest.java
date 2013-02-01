import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

class TCPserverTest {

public static void main(final String[] args) {
  try {
    Socket socket = new Socket();
    socket.connect(new InetSocketAddress("redwreckage.com", 50505), 500);
    if (socket.isConnected()) {
      OutputStream out = socket.getOutputStream();
                                        
      PrintWriter output = new PrintWriter(out);
      String text = "test";
      output.println(text);
      output.flush();

      Scanner socketScanner = new Scanner(socket.getInputStream());
      String response = "";
      while (socketScanner.hasNext()) {
        response += socketScanner.nextLine();
      System.out.println(response);
      }

      out.flush();
      out.close();
      System.out.println(response);
    }

    } 
    catch (UnknownHostException e) {
    } catch (IOException e) {
    }
    return;
  }
}
